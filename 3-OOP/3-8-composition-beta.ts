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

    constructor(
      coffeeBeans:number, 
      private milk:MilkFrother, 
      private sugar:SugarProvider
    ){
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded); 
    }
  }

  interface MilkFrother{
    makeMilk(cup:CoffeeCup): CoffeeCup; 
  }

  interface SugarProvider{
    addSugar(cup:CoffeeCup):CoffeeCup; 
  }

  class CheapMilkSteamer implements MilkFrother{
    private steamMilk():void{
      console.log('cheap steaming some milk...🥛')
    }
    makeMilk(cup:CoffeeCup) : CoffeeCup {
      this.steamMilk();
      return{
        ...cup,
        milk: true, 
      }
    }
  }

  class FancyMilkSteamer implements MilkFrother{
    private steamMilk():void{
      console.log('fancy steaming some milk...🥛')
    }
    makeMilk(cup:CoffeeCup) : CoffeeCup {
      this.steamMilk();
      return{
        ...cup,
        milk: true, 
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother{
    private steamMilk():void{
      console.log('cold steaming some milk...🥛')
    }
    makeMilk(cup:CoffeeCup) : CoffeeCup {
      this.steamMilk();
      return{
        ...cup,
        milk: true, 
      }
    }
  }
  
  class NoMilk implements MilkFrother{
    makeMilk(cup:CoffeeCup):CoffeeCup{
      return cup; 
    }
  }

  class AutomaticSugarMixer implements SugarProvider{
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

  class SugarMixer implements SugarProvider{
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

  class NoSugar implements SugarProvider{
    addSugar(cup:CoffeeCup) : CoffeeCup {
      return cup; 
    }
  }

  //milk
  const CheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer(); 
  const noMilk = new NoMilk(); 

  //sugar
  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer(); 
  const noSugar = new NoSugar

  //
  const sweetMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sugarMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12,CheapMilkMaker,noSugar);
  const coldMachine = new CoffeeMachine(12,coldMilkMaker,noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, CheapMilkMaker,candySugar); 

}