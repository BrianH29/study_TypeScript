{

/**
 * Type Inference
 * -> 타입 추론: type 을 설정하지 않더라도, 변수에 담긴 값을 통해서 그 변수명의 타입을 지정해준다. 
 */

  let text = 'hello';
  text = 1; 

  /**
   * 
   * @param msg type을 설정하지 않을경우 앞글자 밑에 ... 이 표신된다. 
   * Parameter 'msg' implicitly has an 'any' type, but a better type may be inferred from usage 라는 문구가 뜬다.
   * 'any' type은 좋지 않기 때문에 msg type을 지정 해주거나 혹은 default msg를 지정해주면 타입이 지정된다. 
   */
  function print(msg = 'if there is no msg send this!!!') {    
    console.log(msg); 
  }

  print('hello');
  print(1); //타입설정이 되었기 때문에 오류가 뜬다. 

  function add(x: number, y:number){
    return x+y; 
  }

  const result = add(1,2); 

}