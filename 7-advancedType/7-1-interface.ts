{
  /**
   * interface : 규격사항 -> 올바르게 구현하는 것이 목적 
   * type : data의 묘사 -> 데이터를 담을 목적 
   */


  type PositionType ={
    x:number;
    y:number;
  };

  interface PositionInterface {
    x:number;
    y:number;
  }; 

  //💫 Object
  const obj1: PositionType = {
    x:1,
    y:2,
  };
  const obj2: PositionInterface = {
    x:1,
    y:2,
  };

  //💫 Class
  class a1 implements PositionType {
    x:1;
    y:2;
  };
  class a2 implements PositionInterface{
    x:1;
    y:2;
  };

  // 💫 Extends
  interface ZPositionInterface extends PositionInterface{
    z:number; 
  }

  type ZPositionType = PositionType & {z:number};

  //only interfaces can be merged. 
  interface PositionInterface{
    z:number; 
  }

  // Type aliases can use computed properties
  type Person = {
    name: string,
    age:number, 
  }

  type Name = Person['name'] // string

  type NumberType = number;
  type Direction = 'right' | 'left'; 

}