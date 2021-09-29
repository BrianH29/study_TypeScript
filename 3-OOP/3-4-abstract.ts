{
  type CoffeeCup = {
    shots: number;
    milk : boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shot:number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shot:number): CoffeeCup;
    fillCoffeeBeans(beans:number):void; 
    clean(): void; 
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT:number = 7;
    private coffeeBeans:number = 0;

    private constructor(coffeeBeans:number){
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
   * abtraction(추상화) 
   * interface를 심플하고 간단하게 만들어 주면서 사용하는 사람이 많이 고민
   * 하지 않고 간편하게 사용할 수 있게 도와준다.
   * 
   * 추상화란, 외부에서 어떤 형태로, 공통적으로 어떻게 이 클래스를 이용하게 할것인가... 이걸 고민하는 단계예요. 
   */

  class AmateurUser {
    constructor(private machine: CoffeeMaker){}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2); 
      console.log(coffee); 
    }
  }

  class ProBarista{
    constructor(private machine: CommercialCoffeeMaker){}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(1); 
      this.machine.fillCoffeeBeans(40);
      this.machine.clean(); 
      console.log(coffee); 
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker); 
  //amateur.makeCoffee(); 
  pro.makeCoffee();
}