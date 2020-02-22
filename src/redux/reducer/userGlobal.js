const INITIAL_STATE = {
    id: 0,
    username: '',
    password: '',
    role: '',
    email:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){    
        case 'LOGIN' :
            return {...INITIAL_STATE, id: action.payload.id, username: action.payload.username, password: action.payload.password, role: action.payload.role, 
                                  email:action.payload.email }
            default :
        return state
    }
}