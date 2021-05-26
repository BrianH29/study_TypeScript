{
    //function : login -> success or fail
    type SucessState = {
        result:'success'; 
        response:{
            body: string;
        }
    }

    type FailState = {
        result:'fail';
        reason: string;
    }
    type LoginState = SucessState | FailState
    function login(): LoginState{
        return {
            result: 'success',
            response: {
                body: 'logged in'
            }
        }
    }
    //printLoginState(state)
    // sucess -> 🎉
    // fail -> 😭

    function printLoginState(state: LoginState){
        if(state.result === 'success'){
            console.log(`🎉 ${state.response.body}`)
        } else {
            console.log(`🎉 ${state.reason}`)
        }
    }
}