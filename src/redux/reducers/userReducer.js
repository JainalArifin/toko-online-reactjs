
const initialState = {
    userLogin: []
}

function postUserLogin(state = initialState, action){
    // console.log(action, ' <---- ini action')
    switch (action.type) {
        case 'POST_LOGIN_USER':
            return {...state, userLogin: action.payload.data}
        default:
            // console.log(state, ' <---- cek state');
            return state;
    }
}

export default postUserLogin