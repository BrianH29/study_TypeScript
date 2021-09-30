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

  class CheapMilkSteamer{
    private steamMilk():void{
      console.log('steaming some milk...🥛')
    }
    makeMilk(cup:CoffeeCup) : CoffeeCup {
      this.steamMilk();
      return{
        ...cup,
        milk: true, 
      }
    }
  }

  class AutomaticSugarMixer{
    private getSugar(){
      console.log('getting some sugar from jar... ');
      return true;
    }

    addSugar(cup:CoffeeCup): CoffeeCup{
      const sugar = this.getSugar();
      return {
        ...cup,
        sugar : sugar,
      }
    }
  }


  class CaffeLatteMachine extends CoffeeMachine{
    constructor(
      coffeeBeans:number,
      public readonly serialNumber:string,
      private milkFrother: CheapMilkSteamer
    ){
      super(coffeeBeans); 
    }

    makeCoffee(shots:number):CoffeeCup{
      //super 로 부모의 makeCoffee 메소드를 선어하지 않으면 부모 makeCofee에서 하고 있는 grind,heating,extract 기능이 적용되지 않는다. 
      const coffee = super.makeCoffee(shots); 
      return this.milkFrother.makeMilk(coffee); 
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    constructor(beans:number, private putSugar:AutomaticSugarMixer){
      super(beans);
    }

    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return this.putSugar.addSugar(coffee); 
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine{
    constructor(
      beans:number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ){
      super(beans);
    }

    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee); 
      return this.milk.makeMilk(sugarAdded); 
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