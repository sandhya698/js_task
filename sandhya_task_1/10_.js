// -> 10. Create a list that contains some numbers
//     * Write a function that accepts a value and operation that is to be performed
//     * output should be the the operation performed on the array with the given value
//     * use minimum 6 operators


list = [10,30,40,50,20,100]
const oper = (value,oper) =>{
    if(oper == "add"){
        list.forEach(element => {
            console.log(`the addition of ${element} with ${value} is ${element + value}`)
        });
    }
    else if(oper == "sub"){
        list.foreach(element =>{
            console.log(`the substraction of ${element} with ${value} is ${element - value}`)
        });
    }
    else if(oper == "mul"){
        list.foreach(element =>{
            console.log(`the multiplication of ${element} with ${value} is ${element * value}`)
        });
    }
    else if(oper =="div"){
        list.foreach(element =>{
            console.log(`the divsion of ${element} with ${value} is ${element / value}`)
        });

    }
    else if(oper == "mod"){
        list.forEach(element =>{
            console.log(`the modulus of ${element} with ${value} is ${element % value}`)
        });
    }
    else if( oper == "power"){
        list.forEach(element => {
            console.log(`the ${value} power value of ${element}  is ${element**value}`)
        })
    }
    else if( oper == "inc"){
        list.forEach(element => {
            console.log(`the increment of ${element}  is ${element+=1}`)
        });
    }
    else if( oper == "dec"){
        list.forEach(element => {
            console.log(`the decrement of ${element}  is ${element-=1}`)
        });
    }
    else{
        console.log("the operation entered is not a basic operation")
    }

};
oper(2,"power")
