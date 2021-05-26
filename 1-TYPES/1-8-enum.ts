{
    /**
     * Enum 
     */
    //JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10; 
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2; 
    const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WEDNESDAY":2})
    const dayOfToday = DAYS_ENUM.MONDAY; 

    //TypeSCript
    type DayOfWeek = 'Mon'|'Tue'|'wed'
    enum Days {
        Monday = 'mon',
        Tuesday = 'tue',
        Wednesday = 'wed',
        Thursday = 'thu',
        Friday = 'fri',
        Saturday = 'sat',
        Sunday = sun,
    }
    console.log(Days.Tuesday); 
    const day = Days.Saturday;
    
    let days: Days = Days.Saturday
    days = 1;
    days = 10;
    // enum value could be changed so it is not used often in ts rather better to use union type which value dont change

    let dayOfWeek : DayOfWeek = 'Mon';
    dayOfWeek = 'wed'; 
    //dayOfWeek = 'sat'; value cannot be changed from the setting 
}