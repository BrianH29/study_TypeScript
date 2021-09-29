{
    /**
     * Intersectin Types : &
     * -> 모든 것을 합한. union은 or 이라면 intersection은  &
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId : number;
        work: () => void; 
    };

    function internWork(person: Student & Worker){
        console.log(person.name, person.employeeId, person.work()); 
    }

    internWork({
        name: 'ellie',
        score: 1,
        employeeId: 213,
        work: () => {},
    })
}