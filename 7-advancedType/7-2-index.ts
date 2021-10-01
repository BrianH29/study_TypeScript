{
  const obj = {
    name: 'brian'
  }
  obj.name; // brian
  obj['name']// brian

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female'
  }

  type Name = Animal['name'] //string 
  //const text: Name = 1
  const text : Name = 'hello'

  type Gender = Animal['gender']; //'male' | 'female'
  //const lion:Gender = 'trans'
  const lion:Gender = 'male'; 

  /**
   * keyof
   * -> Animal 에 있는 모든 키의 타입을 할당 하는 것. 
   */
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender'

  type Person = {
    name:string;
    gender:Animal['gender']
  };

  const person:Person ={
    name: 'bi',
    gender: 'female'
  }
}