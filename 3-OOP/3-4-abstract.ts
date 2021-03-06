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
      console.log('heating up....๐ฅ');
    }

    private extract(shots:number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... ๐ฅ`);
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
   * abtraction(์ถ์ํ) 
   * interface๋ฅผ ์ฌํํ๊ณ  ๊ฐ๋จํ๊ฒ ๋ง๋ค์ด ์ฃผ๋ฉด์ ์ฌ์ฉํ๋ ์ฌ๋์ด ๋ง์ด ๊ณ ๋ฏผ
   * ํ์ง ์๊ณ  ๊ฐํธํ๊ฒ ์ฌ์ฉํ  ์ ์๊ฒ ๋์์ค๋ค.
   * 
   * ์ถ์ํ๋, ์ธ๋ถ์์ ์ด๋ค ํํ๋ก, ๊ณตํต์ ์ผ๋ก ์ด๋ป๊ฒ ์ด ํด๋์ค๋ฅผ ์ด์ฉํ๊ฒ ํ ๊ฒ์ธ๊ฐ... ์ด๊ฑธ ๊ณ ๋ฏผํ๋ ๋จ๊ณ์์. 
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