{
  /**
   * Type Assertions 👎
   * -> 타입 강요할때 사용
   */

  function jsStrFunc(): any {
    return 'hello'; 
  }

  /**
   * result.length 를 체크 하고 싶지만 타입이 'any'이기 때문에 string의 메소드를 사용할 수 없다. 
   * 내가 result 가 string을 반환 하는 것을 확신 할 경우에 result length를 꼭 체크 해야 할 경우에
   * type assertions를 사용해서 result의 타입을 변경 하는 것이다. 
   */
  const result = jsStrFunc();
  console.log((result as string).length); 
  console.log((<string>result).length); 

  //ex2 - error ❌
  const wrong : any = 5; 
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined; 
  }

  const numbers = findNumbers()!;
  numbers.push(2); // ❌

}