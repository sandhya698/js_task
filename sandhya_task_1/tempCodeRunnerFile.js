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
            console.log(element - value)
        });
    }
    else if(oper == "mul"){
        list.foreach(element =>{
            console.log(element * value)
        });
    }
    else if(oper =="div"){

    }

}
oper(10,"add")
