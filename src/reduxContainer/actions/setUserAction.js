export const actionSetUserInfo = (id, pw, token)=>{
    return{
        type:"setUserData",
        userId:id,
        password:pw,
        accessToken:token,
    }

}