{
  interface Stack<T> {
    readonly size: number; 
    push(value:T):void;
    pop(): T; 
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next? : StackNode<T>; 
  }

  class StackImpl<T> implements Stack<T> {
    //'_' 붙여서 내부에서 프라이빗으로 쓰이는 변수를 표현 해주고 아래 get 선언과 동일한 명칭이 아니게 하는 방법
    private _size:number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {};

    get size(){
      return this._size;
    }
    push(value:T) {
      if(this.size === this.capacity){
        throw new Error('stack is full');
      }
      const node = {value, next: this.head }
      this.head = node; 
      this._size++;
    }

    pop(): T{
      if(this.head == null){
        throw new Error('stack is empty!!!'); 
      }
      const node = this.head;
      this.head = node.next; 
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(4);
  stack.push('Brian');
  stack.push('bob');
  stack.push('steve');
  while(stack.size !=0){
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(4);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while(stack2.size !=0){
    console.log(stack2.pop());
  }
}