// Create an array of objects with objects having the following properties
// * {name (string), age (number), country (string), hobbies array (string [ ] ) }
// * Write a function to display all the objects on the console
// * Write a function to display all the objects having age less than 30
// * Write a function to display all the objects having country India 

console.log("array with objects and displaying people with age less than 30 and having country as India \n")
const ArrayOfObjects = (my_arr) =>{
    console.log(my_arr,"\n");
    console.log("age is less than 30 \n");
    for(let value of my_arr){
       
        if(value.age < 30){
            console.log(value);
        }
    }
    console.log("person with country as India \n");
    for(let indian of my_arr){
        if(indian.country == "india"){
            console.log(indian);
        }
    }
};
ArrayOfObjects(
    [
        {
            Name    : "sandhya",
            age     : 21,
            country : "india",
            hobbies : ["internet surfing","cooking","reading"]
        },
        {
            name    : "bhavita",
            age     :  22,
            country : "US",
            hobbies : ["internet surfing","cooking","reading"]
        },
        {
            name    : "padma",
            age     :  30,
            country : "india",
            hobbies : ["internet surfing","cooking","reading"]
        }
    ]
    );