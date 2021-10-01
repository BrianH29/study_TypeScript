{
  type FailState = {
    result : 'fail',
    reason : 'offline' | 'down' | 'timeout'; 
  }

  type SuccessState = {
    result : 'success'; 
  }

  type ResultState = SuccessState | FailState; 

  class NetworkClient {
    tryConnect():ResultState{
      return 
    }
  }
  
  class UserService {
    constructor(private client: NetworkClient){}
  
    login(){
      this.client.tryConnect(); 
      //login...
    }
  }
  
  class App{
    constructor(private userService: UserService){}
    run(){
      try {
        this.userService.login();
      } catch (error) {
        //catch 로 들어오면서 타입이 'any'로 변경 되기 때문에 catch 안에서 특정 타입을 주더라도 'any' 타입이 된다. 
        console.log('catch!!!!!! ')
      }
    }
  }
  
  const client = new NetworkClient();
  const service = new UserService(client); 
  const app = new App(service);
  app.run(); 
}