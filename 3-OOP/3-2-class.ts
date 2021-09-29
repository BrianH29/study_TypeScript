{
  type CoffeeCup = {
    shots: number;
    milk : boolean;
  }

  //class 안에서는 const,let,function등 타입을 선언하지 않는다. 
  class CoffeeMaker {
    BEANS_GRAM_PER_SHOT:number = 7; 
    coffeeBeans:number = 0; 

    //클래스를 가지고 오브젝트 인스턴스를 생성할 때 호출되는 함수 
    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots:number):CoffeeCup{
      if(this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT){
        throw new Error('not enough coffee beans')
      }
  
      this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
  
      return {
        shots,
        milk: false,
      }
    }

  }

  const maker = new CoffeeMaker(32); 
  console.log(maker); 
}