{
  type ToDo  = {
    title: string;
    description: string; 
    label: string;
    priority: 'high' | 'low'; 
  }

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>):ToDo{
    return {...todo, ...fieldsToUpdate};
  }

  const todo: ToDo = {
    title: 'learn typescript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  }

  const updated = updateTodo(todo, {priority: 'low'});
  console.log(updated); 

  const update2 = updateTodo(todo, {label:'sleep'});
  console.log(update2); 
}