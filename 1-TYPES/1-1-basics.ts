{
    // 중괄호로 local scope 영역 설정  
    //모듈 작성하지 않고 파일을 작성하면 global로 작성 되기때문에 다른 파일과 충돌 될 수 있음

    /**
     * JavaScript
     * Primitive : number, string, boolean, bigint, symobl, null, undefined
     * object : function, array
     */

    //number
    const num:number = -6;

    //string
    const str:string = 'hello'; 

    //boolean
    const boal:boolean = true; 

    //undefined
    let name = undefined; // ❌
    let age: number | undefined // ⭕ 
    age = undefined;
    age = 1; 

    //example
    function find() : number | undefined{
        //``return 1; `
        return undefined; 
    }
    
    //null - 비었다
    let person: null; //❌
    let person2 : string | null; // ⭕

    //보편적으로 undefined를 많이 쓴다. 데이터 타입이 결정 됬거나 혹은 안됬거나
    //값이 있다 없다 경우에는 null 을 사용한다. 
    
    //unknown -💩
    let notSure: unknown = 0; 
    notSure = 'hello';
    notSure = true; 

    //any - 💩
    let anything: any = 0;
    anything = 'hello'; 

    //void - that nothing returns
    function print(): void{
        console.log('hello');
        return; 
    }

    let unusable: void = undefined; // 💩

    //never
    //절대 다른 타입을 return 할 수 없다. error 혹은 while로 코드가 끝나지 않게 작성해야 한다. 
    function throwError(message: string):never {
        // message -> server(log)

        throw new Error(message); 
        while(true){

        }

        //return 1; 다른 타입을 리턴 할 수 없다. 
        let neverEnding: never; // 💩
    }

    //object
    let obj: object; // 💩 
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name: 'brian'});
    acceptSomeObject({animal:'dog'})

}