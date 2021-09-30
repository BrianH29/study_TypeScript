interface Employee{
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`fulltime!!`)
  }
  workFullTime(){}
}

class PartTimeEmployee implements Employee {
  pay(){
    console.log(`part time`)
  }
  workPartTime(){};
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 👎👎 
function payBAD(employee: Employee): Employee {
  employee.pay(); 
  return employee; 
}

function pay<T extends Employee>(employee: T): T {
  //T extends Employee 하기 전에 T 으로만 타입을 설정하면 "T"가 아뭇것도 지정이 안되어져 있기 때문에 (어떤 타입인지 모르기 때문에) 
  //employee." " dot 연산자로 아뭇것도 찾을 수 없다. T을 어떤것에서 파생됬는지 조금더 명확하게 extends를 해주면 된다. 
  employee.pay(); 
  return employee; 
}

const brian = new FullTimeEmployee();
const max = new PartTimeEmployee(); 

// casting not good 👎
//const brianAfterPay = pay(brian) as FullTimeEmployee;
const brianAfterPay = pay(brian)
const maxAfterpay = pay(max); 

const obj = {
  animal: '🐒',
};

function getValue<T, K extends keyof T>(obj: T, key:K): T[K]{
  return obj[key];
}

console.log(getValue(obj, 'animal'));