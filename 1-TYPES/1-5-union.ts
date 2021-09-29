{
    /**
     * Union types: OR
     * 발생 할 수 있는 여러 케이스 중에 단 하나만 선택 할 경우에
     */

    type Direction = 'left'|'right'|'up'|'down'
    
    function move(direction: Direction){
        console.log(direction); 
    }
    move('left')

    type TileSize = 8 | 16 | 32
    const tile: TileSize = 16; 

    //function : login -> success or fail
    type SucessState = {
        response:{
            body: string;
        }
    }

    type failState = {
        reason: string;
    }
    type LoginState = SucessState | failState
    function login(): LoginState{
        return {
            response: {
                body: 'logged in'
            }
        }
    }
    //printLoginState(state)
    // sucess -> 🎉
    // fail -> 😭

    function printLoginState(state: LoginState){
        if('response' in state){
            console.log(`🎉 ${state.response.body}`)
        } else {
            console.log(`🎉 ${state.reason}`)
        }
    }
}