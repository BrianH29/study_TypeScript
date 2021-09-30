{
  //4.13 interitance 부터
  
  type CoffeeCup = {
    shots: number;
    milk? : boolean;
    sugar?: boolean; 
  }

  interface CoffeeMaker {
    makeCoffee(shot:number): CoffeeCup;
  }

  /**
   * class 앞에 abstract을 붙이므로 추상 클래스로 변경 되기 때문에 CoffeeMachine을 direct로 선언이 불가하다. 
   * abstract class 내에 공통적으로 사용하는 코드에서 달라져야 하는 부분이 있다면 그 부분만 abstract method로 구현.
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT:number = 7;
    private coffeeBeans:number = 0;

    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
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
      console.log('heating up....🔥');
    }

    protected abstract extract(shots:number): CoffeeCup;

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
      console.log('steaming some milk...🥛')
    }

    protected extract(shots:number): CoffeeCup{
      this.steamMilk();
      return{
        shots,
        milk:true, 
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    protected extract(shots:number): CoffeeCup{
      return{
        shots,
        sugar: true, 
      }
    }
  }

  const machines:CoffeeMaker[] = [
    new CaffeLatteMachine(16,'sss'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(10,'sss'),
    new SweetCoffeeMaker(20),
  ];

  machines.forEach(machine => {
    console.log('---------------------------');
    machine.makeCoffee(1); 
  });
}