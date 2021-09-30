{
  //4.13 interitance 부터
  
  type CoffeeCup = {
    shots: number;
    milk : boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shot:number): CoffeeCup;
  }

  // coffeeMachine 과 중복 되는 코드들이 많으므로 상속으로 처리 할 것이다.
  // class CaffeLatteMachine {
  //   private static BEANS_GRAM_PER_SHOT:number = 7;
  //   private coffeeBeans:number = 0;

  //   private constructor(coffeeBeans:number){
  //     this.coffeeBeans = coffeeBeans; 
  //   }

  //   static makeMachine(coffeeBeans:number): CaffeLatteMachine{
  //     return new CaffeLatteMachine(coffeeBeans);
  //   }

  //   fillCoffeeBeans(beans:number){
  //     if(beans < 0){
  //       throw new Error('not enough coffee beans');
  //     }
  //     this.coffeeBeans -= beans; 
  //   }

  //   clean(){
  //     console.log('cleaning the machine...')
  //   }

  //   private grindBeans(shots:number){
  //     console.log(`grinding beans for ${shots}`);
  //     if(this.coffeeBeans < shots * CaffeLatteMachine.BEANS_GRAM_PER_SHOT){
  //       throw new Error('Not Enough Coffee Beans');
  //     }
  //     this.coffeeBeans -= shots * CaffeLatteMachine.BEANS_GRAM_PER_SHOT; 
  //   }

  //   private preheat():void{
  //     console.log('heating up....🔥');
  //   }

  //   private extract(shots:number): CoffeeCup {
  //     console.log(`Pulling ${shots} shots ... 🔥`);
  //     return {
  //       shots,
  //       milk: false,
  //     }
  //   }

  //   makeCoffee(shots:number):CoffeeCup{
  //     this.grindBeans(shots); 
  //     this.preheat();
  //     const coffee = this.extract(shots); 
  //     return {...coffee, milk: true}
  //   }
  // }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT:number = 7;
    private coffeeBeans:number = 0;

    protected constructor(coffeeBeans:number){
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
      console.log('heating up....🔥');
    }

    private extract(shots:number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... 🔥`);
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

  /**
   * #1 상속 만들때 발생한 오류 : Cannot extend a class 'CoffeeMachine'. Class constructor is marked as private.
   * -> CoffeeMachine의 constructor 가 private으로 잡혀져 있어서 그렇다. 그래서 protected로 변경해줌. 
   * 
   * 
   */
  class CaffeLatteMachine extends CoffeeMachine{
    constructor(coffeeBeans:number,public readonly serialNumber:string){
      super(coffeeBeans); 
    }

    private steamMilk():void{
      console.log('steaming some milk...🥛')
    }

    makeCoffee(shots:number):CoffeeCup{
      //super 로 부모의 makeCoffee 메소드를 선어하지 않으면 부모 makeCofee에서 하고 있는 grind,heating,extract 기능이 적용되지 않는다. 
      super.makeCoffee(shots); 
      this.steamMilk();
      return{
        shots,
        milk: true, 
      }
    }
  }

  const machine = CoffeeMachine.makeMachine(12); 
  const latteMachine = new CaffeLatteMachine(23, 'S12E43L34'); 
  const coffee = latteMachine.makeCoffee(1);
  //console.log(machine, '\n\n');
  console.log(coffee); 
  console.log(latteMachine.serialNumber);
}