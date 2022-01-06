{
  type ToDo  = {
    title: string;
    description: string; 
  }

  //이미 readonly type api 가 있다. 따로 만들 필요 없이 선언 하면 된다. 
  // type Readonly<T> = {
  //   readonly [P in keyof T]: T[P];
  // }

  function display(todo:Readonly<ToDo>){
    todo.title = 'jaja'; 
  }

}