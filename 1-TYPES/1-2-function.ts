{
    //JavaScript π©
    function jsAdd(num1, num2){
        return num1 + num2; 
    }

    //TypeScript
    function tsAdd(num1:number, num2:number): number{
        return num1 + num2; 
    }

    //JavaScript π©
    function jsFetchNum(id){
        //code ...
        //code ...
        //code ...

        return new Promise((resolve, reject) => {
            resolve(100); 
        });
    }

    //TypeScript
    function fetchNum(id:string): Promise<number> {
        //code...
        //code...
        //code...

        return new Promise((resolve, reject) => {
            resolve(100); 
        })
    }

    //JavaScript => TypeScript
    //Optional parameter - '?' with questionmark it gives the option of parameter 
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName); // μ λ¬ κ°μ΄ μμΌλ©΄ undefined
    }
    printName('Steve','Jobs');
    printName('Brian'); 

    //Default parameter
    function printMessage(message:string = 'default message'){
        console.log(message); 
    }
    printMessage(); 

    //Rest parameter
    function addNumbers(...numbers:number[]):number{
        return numbers.reduce((a,b) => a + b);
    }

    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));





}