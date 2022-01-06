{
    //partial type - optional
    type ToDo  = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    }

    const todo: ToDo = {
        title: 'TYPESCRIPT KING',
        description: 'learn how to write good type',
        label: 'study',
        priority: 'low',
    }
    function updateTodo(todo : ToDo, fieldsToUpdate: Partial<ToDo>) : ToDo {
        return { ...todo, ...fieldsToUpdate}
    }

    const updated = updateTodo(todo, {});
    const updated2 = updateTodo(todo, {label : 'sleep', priority: 'high'});

    // console.log('updated : ', updated2);

    //required
    const re: ToDo = {
        title: 'TYPESCRIPT KING',
        description: 'learn how to write good type',
        label: 'study',
        priority: 'low',
    }
    function requiredTodo(re: ToDo, update: Required<ToDo>) : ToDo {
        return {...re, ...update}
    }

    //update 에 하나라도 빠지면 오류남.
    const required = requiredTodo(re, {
        title:'check',
        description:'hello',
        label:'sleep',
        priority:'high',
    });
    console.log('\n required :', required);

    //pick
    type PickMeta = Pick<ToDo, 'label' | 'priority'>

    function getTodo() : ToDo {
        return{
            title:'check',
            description:'hello',
            label:'sleep',
            priority:'high',
        }
    }

    function pickTodo() : PickMeta {
        return{
            label:'sleep',
            priority:'high',
        }
    }

    //omit
    type MyChoice = {
        date : string
    }

    //제외하고 & 로 타입 붙이기
    type Ex = Omit<ToDo, 'label'> & MyChoice

    function exclude(): Ex {
        return{
            title:'check',
            description:'hello',
            priority:'high',
            date: '2022-01-06'
        }
    }

    //Record
    /*
        Construct a type with a set of properties K of type T
        type Record<K extends keyof any, T> = {
            [P in K]: T;
        };
     */

    // this wont work cuz its not a key
    // type Movie = {
    //     title: string
    // }

    type Movie = 'harry potter' | 'transformer' | 'avengers';
    type Theatre = {
        location: string
    }

    const nav : Record<Movie, Theatre> = {
        "harry potter" : {location: 'Toronto'},
        avengers : {location: 'Yongsan'},
        transformer: {location: 'Hamilton '}
    }

    console.log('nav : ', nav);

}