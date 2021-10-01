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
}