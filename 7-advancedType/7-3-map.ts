{
  type Video = {
    title:string;
    author: string; 
    description: string; 
  };
  //[1,2].map(item => item * item); // [1,4];

  /**
   * 포인트!!!!
   */
  //있어도 되고 없어도 되고
  type Optional<T> = {
    //P 라는 것은 T 타입에 모든 키중에 하나.
    [P in keyof T]?: T[P] // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>; 
  
  type Animal = {
    name:string;
    age:number;
  };

  const animal: Optional<Animal> ={
    name: 'dog',
  }

  animal.name = 'cat'; 

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'eillie', 
    description: 'heheheh', 
  }

  type Nullable<T> = {
    [P in keyof T]:T[P] | null;
  }
  
  const obj2: Nullable<Video> = {
    title:"hi",
    author: null, 
    description:null, 
  }

  type Proxy<T> = {
    get(): T; 
    set(value:T):void; 
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }

  //error : Cannot assign to 'author' because it is a read-only property
  //video.author = 


  // 위 비디오 타입이 변경 될 때마다 아래 타입들로 일일이 직접 수정해야 한다. map으로 이 불편함을 처리 한다!!!
  // type VideoOptional ={
  //   title?:string;
  //   author?:string;
  // }

  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string; 
  // }


}