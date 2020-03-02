const INITIAL_STATE = {
    id: 0,
    username: '',
    password: '',
    role: 0,
    email:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){    
        case 'LOGIN' :
            return {...INITIAL_STATE, id: action.payload.id, username: action.payload.username, password: action.payload.password, role: action.payload.role, 
                                  email:action.payload.email }
            default :
        case 'LOG_OUT' :
            return {...INITIAL_STATE}
        return state
    }
}