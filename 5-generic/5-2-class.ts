{
  interface Either<L,R> {
    left: () => L;
    right: () => R; 
  }

  //class SimpleEither<LEFT, RIGHT> implements Either {
  class SimpleEither<L,R> implements Either<L,R> {
    constructor(private leftValue: L, private rightValue: R){}
    left():L{
      return this.leftValue;
    }

    right():R{
      return this.rightValue;
    }
  }

  const either: Either<number,number> = new SimpleEither(4,5); 
  either.left();
  either.right(); 

  const best : Either<number, string> = new SimpleEither(4, 'hello');
  best.left();

  const best2 = new SimpleEither({name:'Brian'}, 'hello'); 
}