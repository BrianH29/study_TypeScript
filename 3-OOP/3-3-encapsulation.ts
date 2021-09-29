{
  type CoffeeCup = {
    shots: number;
    milk : boolean;
  }

  /**
   * encapsulation : private, public, protected
   */
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT:number = 7;
    private coffeeBeans:number = 0;

    private constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    /**
     * 
     * @param coffeeBeans 
     * @returns 
     * static이라는 키워드를 붙여서 무언가 오브젝트를 만들수 있는 이런 함수를 제공한다면 
     * 그 말은 누군가가 생성자를 이용해서 생성하는 것을 금지하기 위해서 사용한다. 그래서 이럴 경우에는
     * 위 constructor를 private을 붙여준다. 이렇게 해서. 항상 static method를 사용 할 수 있도록
     * 권장하는 것이 좋다. 
     */
    static makeMachine(coffeeBeans:number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans); 
    }

    /**
     * 
     * @param beans 
     * coffeeBeans 를 encapsulation을 하지 않으면 어디서든 선언해서 변경 할 수도 있고 음수가 들어 올수도 있다.
     * 이것을 방지 하기 위해서 coffeeBeans를 private로 막고. beans 갯수를 변경 하기 위해서 오로지
     * 함수를 통해 바꿀 수 있도록 함수를 생성한다. 
     */
    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
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

  //const maker = new CoffeeMaker(32); 
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(0); 
  maker.makeCoffee(2);
  console.log(maker); 


}