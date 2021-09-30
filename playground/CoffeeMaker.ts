import { isContext } from "vm";

{
  type CoffeeCup = {
    shots:number;
    milk: boolean;
    syrup: boolean;
    type: string; 
  }

  interface Drip {
    extractCoffee(shots:number) : CoffeeCup; 
    clean():void; 
  }

  interface Machine {
    extractCoffee(shots:number) : CoffeeCup; 
    fillCoffeeBeans(coffeeBeans:number):void; 
    clean():void;
  }

  class MakeCoffee implements Drip, Machine {
    private static BEANS_PER_GRAM:number = 10; 
    private coffeeBeans:number = 0;

    protected constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans; 
    }

    static prepareCoffee(coffeeBeans:number):MakeCoffee {
      return new MakeCoffee(coffeeBeans); 
    }

    fillCoffeeBeans(beans:number){
      if(beans < 0){
        throw new Error('beans needs to be greater than 0');
      }

      this.coffeeBeans += beans; 
    }

    private grindBeans(shots:number){
      if(this.coffeeBeans < shots * MakeCoffee.BEANS_PER_GRAM){
        throw new Error('not enough coffee beans')
      }

      this.coffeeBeans -= shots * MakeCoffee.BEANS_PER_GRAM;
    }

    private preheat(){
      console.log('heating up!!!! 🔥');
    }

    private extract(shots:number): CoffeeCup {
      console.log(`extract ${shots}`);
      return {
        shots,
        milk: false,
        syrup: false,
        type: 'ice'
      }
    }

    clean(){
      console.log('cleaning machine!!!')
    }

    extractCoffee(shots:number):CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots); 
    }
  }


  class CoffeeMaker extends MakeCoffee {
    constructor(beans:number){
      super(beans); 
    }

    steamMilk():void {
      console.log('steaming milk .... '); 
    }

    extractCoffee(shots:number):CoffeeCup{
      super.extractCoffee(shots);
      this.steamMilk(); 
      return {
        shots,
        milk: true,
        syrup: false,
        type: 'hot',
      }
    }
  }

  const maker:MakeCoffee = MakeCoffee.prepareCoffee(40);
  const coffee = new CoffeeMaker(40); 
  const extract = coffee.extractCoffee(2); 
  console.log(extract); 
  maker.extractCoffee(2);
}