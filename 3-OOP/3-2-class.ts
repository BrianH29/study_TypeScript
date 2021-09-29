{
  type CoffeeCup = {
    shots: number;
    milk : boolean;
  }

  //class 안에서는 const,let,function등 타입을 선언하지 않는다. 
  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT:number = 7; // class level
    coffeeBeans:number = 0; // instance(object) level

    //클래스를 가지고 오브젝트 인스턴스를 생성할 때 호출되는 함수 
    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    /**
     * 
     * @param coffeeBeans 
     * @returns 
     * 만약 constructor을 사용하지 않고 새로운 커피를 만들고 싶을 경우에
     *  ***class 내부의 어떠한 속성도 필요하지 않기 때문에 함수 앞에 static을 붙여준다. 
     */
    static makeMachine(coffeeBeans:number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans); 
    }

    makeCoffee(shots:number):CoffeeCup{
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
        throw new Error('not enough coffee beans')
      }
  
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
  
      return {
        shots,
        milk: false,
      }
    }

  }

  const maker = new CoffeeMaker(32); 
  console.log(maker); 
  const maker2 = CoffeeMaker.makeMachine(14);
  console.log(maker2); 
}