{
  //4.13 interitance ๋ถํฐ
  
  type CoffeeCup = {
    shots: number;
    milk? : boolean;
    sugar?: boolean; 
  }

  interface CoffeeMaker {
    makeCoffee(shot:number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT:number = 7;
    private coffeeBeans:number = 0;

    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans:number): CoffeeMachine{
      return new CoffeeMachine(coffeeBeans); 
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
    }

    clean(){
      console.log('cleaning the machine...')
    }

    private grindBeans(shots:number){
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error('Not Enough Coffee Beans');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT; 
    }

    private preheat():void{
      console.log('heating up....๐ฅ');
    }

    private extract(shots:number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... ๐ฅ`);
      return {
        shots,
        milk: false,
      }
    }

    makeCoffee(shots:number):CoffeeCup{
      this.grindBeans(shots); 
      this.preheat();
      return this.extract(shots);
    }
  }


  class CaffeLatteMachine extends CoffeeMachine{
    constructor(coffeeBeans:number,public readonly serialNumber:string){
      super(coffeeBeans); 
    }

    private steamMilk():void{
      console.log('steaming some milk...๐ฅ')
    }

    makeCoffee(shots:number):CoffeeCup{
      //super ๋ก ๋ถ๋ชจ์ makeCoffee ๋ฉ์๋๋ฅผ ์ ์ดํ์ง ์์ผ๋ฉด ๋ถ๋ชจ makeCofee์์ ํ๊ณ  ์๋ grind,heating,extract ๊ธฐ๋ฅ์ด ์ ์ฉ๋์ง ์๋๋ค. 
      super.makeCoffee(shots); 
      this.steamMilk();
      return{
        shots,
        milk: true, 
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return{
        ...coffee,
        sugar: true, 
      }
    }
  }

  const machines:CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16,'sss'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine => {
    console.log('---------------------------');
    machine.makeCoffee(1); 
  });
}