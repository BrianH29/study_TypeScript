{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT:number = 7  // class level - static을 붙여서 생성 할 때 마다 생성되지 않게 하기 위해서 
    coffeeBeans : number = 0; // instance (object) level

    constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans; 
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT){
        throw new Error('not enough coffee beans!')
      }

      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32); 
  const maker2 = new CoffeeMaker(15); 
  console.log(maker); 
  console.log(maker2); 
}