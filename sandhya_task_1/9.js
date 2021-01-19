// 9. Create a function on calling the function it should return 
//     * Current Date
//     * Current Time
//     * Current Day 
//     * Current Month
//     * Current Year
//     example output:- Sunday 20 December 2020  10:22 

function date(){
    const my_date = new Date();
    day    = my_date.toDateString();
    // date   = my_date.getDate();
    // month  = my_date.getMonth();
    // year  = my_date.getFullYear();
    hours  = my_date.getHours();
    min    = my_date.getMinutes();
    console.log(day +" " + hours+ ":"+ min);
}
date();