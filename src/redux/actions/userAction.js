
export const postLoginUser = (newData_user_Login)=>{
    // console.log(newData_user_Login, ' <---- new data')
    return (dispatch, getstate) => {
        dispatch(postLogin(newData_user_Login))
    }
}

export const postLogin =(data)=>{
    // console.log(data, ' <---- dapat data')
    return {
        type: 'POST_LOGIN_USER',
        payload: {data}
    }
}