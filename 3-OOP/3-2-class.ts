{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT:number = 7  // class level - static을 붙여서 생성 할 때 마다 생성되지 않게 하기 위해서 
    coffeeBeans : number = 0; // instance (object) level

    constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans; 
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans); 
    }
    /**
     * BEANS_GRAMM_PER_SHOT : 생성 될때 마다 똑같은 값이므로 static을 붙여 줬을때 this.BEANS.. 가 아닌 class 이름을 붙인다. 
     * this.BEANS.. ==> CoffeeMaker.BEANS...
     */
    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
        throw new Error('not enough coffee beans!')
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
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

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3); 
}