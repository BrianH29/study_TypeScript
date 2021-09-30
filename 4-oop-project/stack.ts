{
  interface Stack {
    readonly size: number; 
    push(value:string):void;
    pop(): string; 
  }

  type StackNode = {
    readonly value: string;
    readonly next? : StackNode; 
  }

  class StackImpl implements Stack {
    //'_' 붙여서 내부에서 프라이빗으로 쓰이는 변수를 표현 해주고 아래 get 선언과 동일한 명칭이 아니게 하는 방법
    private _size:number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {};

    get size(){
      return this._size;
    }
    push(value:string) {
      if(this.size === this.capacity){
        throw new Error('stack is full');
      }
      const node: StackNode = {value, next: this.head }
      this.head = node; 
      this._size++;
    }

    pop(): string{
      if(this.head == null){
        throw new Error('stack is empty!!!'); 
      }
      const node = this.head;
      this.head = node.next; 
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(4);
  stack.push('Brian');
  stack.push('bob');
  stack.push('steve');

  console.log(stack);

  while(stack.size !=0){
    console.log(stack.pop());
  }
}