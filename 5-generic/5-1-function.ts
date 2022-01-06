{
  //BAD - string, number 등 별로 다 만들어야 하기 때문에 좋지 않는 코드이다.
  function checkNotNullBAD(arg: number | null) : number {
    if(arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const result = checkNotNullBAD(123);
  console.log(result);
  checkNotNull(null);

  function checkNotNull<T>(arg: T | null) : T{
    if(arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}