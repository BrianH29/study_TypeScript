{
  /**
   * Type Aliases
   */

  type Text = string; 
  const name: string= 'brian';
  const name2: Text = 'brian';
  const age : Text = 2; // ❌error

  type Num = number;

  /**
   * primitive(원시) type 말고도 object도 type 설정이 가능하다. 
   */
  type Student = {
    name: string;
    age: number;
  };

  //❌error
  const student: Student = {
    animal : 'dog'
  }

  //✅correct - 위 설정한 타입과 동일 해야만 한다. 
  const student1: Student = {
    name: 'Brian',
    age: 10,
  }


  /**
   * String Literal Types
   */
  type Name = 'name'; 
  let brianName: Name; 
  brianName = 'name'; 

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true; 
  const isCat: Boal = true; 
}