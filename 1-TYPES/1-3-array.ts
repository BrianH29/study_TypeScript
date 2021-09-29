{
  //Array 정읜
  const fruits:string[] = ['🍅','🍓'];
  const scores: number[]  = [1,3,5];
  const scores2: Array<number> = [1,3,5];

  function printArray(fruits: string[]) {
    fruits.push('🍑');
  }
  //배열의 내용을 바꾸지 않게 하기 위해서 readonly를 적용한다. 
  function printArray2(fruits: readonly string[]) {
    //readonly를 붙였을 경우에는 push 아래에 오류가 뜬다. 
    fruits.push('🍑');
  }

  //readonly를 사용하기 위해서는 string[] 형식을 사용해야 한다. 
  //일관성있게 사용하기 위해서는 string[]으로 통일하는게 좋을거 같다. 
  function printArry3(fruits: readonly Array<string>) {
    fruits.push('🥑');
  }
 
  /**
   * Tuple - array와 다르게 tuple은 서로 다른 타입을 담을 수 있다. 
   * -> index에 무엇이 들어 있는지 확인하기 어렵기 때문에 가독성이 떨어진다.
   * -> interface, type alias, class로 대체할수 있다. 
   */
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123

  //해결방법 object destructuring 
  const [name, age] = student; 


}