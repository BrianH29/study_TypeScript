{
    /**
     * Enum 
     * -> 상수 값들을 한 곳에 정리
     * -> 한 번 정해지면 바뀌지 않은 특정한 고정 값
     */
    //JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10; 
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2; 
    //freeze 값으 변경을 막는다. 
    const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WEDNESDAY":2})
    const dayOfToday = DAYS_ENUM.MONDAY; // 0

    //TypeSCript
    type DayOfWeek = 'Mon'|'Tue'|'wed'
    enum Days {
        Monday = 'mon', // 값을 지정하지 않을 경우에는 index 값 0 으로 출력된다. 
        Tuesday = 'tue',
        Wednesday = 'wed',
        Thursday = 'thu',
        Friday = 'fri',
        Saturday = 'sat',
        Sunday = 'sun',
    }
    console.log(Days.Tuesday); 
    const day = Days.Saturday;
    
    let days: Days = Days.Saturday
    days = 1;
    days = 10;
    // enum value could be changed so it is not used often in ts rather better to use union type which value dont change
    // enum의 문제점은 값을 변경 할 수 있다는 것. 타입이 정확하게 지원되지 않음
    // enum 대신 type을 사용하는게 좋다. 

    let dayOfWeek : DayOfWeek = 'Mon';
    dayOfWeek = 'wed'; 
    //dayOfWeek = 'sat'; value cannot be changed from the setting 
}