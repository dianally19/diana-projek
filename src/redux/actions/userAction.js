import axios from 'axios'
import { urlApi } from '../../helper/database'

export const loginUser = (emailUser) => {
    return (dispatch) => {
         axios.get(urlApi + 'customer/getDataLogin/' + emailUser)
         .then((res) => {
             if(res.data.length > 0) {
                 dispatch({
                     type: 'LOGIN',
                     payload: {
                        id: res.data[0].id,
                        username: res.data[0].nama,
                        password: res.data[0].password,
                        role: res.data[0].role,
                        email: res.data[0].email
                     }
                 })
                 alert(`Welcome, ${res.data[0].nama} !`)
             } else {
                 alert('Username salah!')
             }
         })
         .catch((err) => {
             alert('Data gak dapet bro!')
             console.log(err)
         })
    }
}