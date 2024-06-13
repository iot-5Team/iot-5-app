const userInfo = {
    userId:'',
    password:'',
    accessToken:''
}

const setLoginUserData =(state = userInfo , action)=>{
    switch(action.type){
        case "setUserData":
            return{
                ...state,
                userId:action.userId,
                password:action.password,
                accessToken:action.accessToken,
            }
        default:
            return state;
    }

}
export default setLoginUserData