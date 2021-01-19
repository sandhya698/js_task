// -> 11. Create a functionality that accepts mode of operation and operands
//     * operands should not be limited
//     * return result after peration performed on the operands


const operation = (operation,...myarray) =>{
    if(operation == "add"){
        console.log("addition : ")
        let addition = myarray.reduce((value,ele)=>{
            console.log(value)
            return value+ele
        },50);
        return addition
    }
    else if(operation == "sub"){
        let substraction = myarray.reduce((value,ele)=>{
            console.log(value)
            return value - ele
        },50);
        return substraction
    }
    else if(operation == "mul"){
        let multiplication = myarray.reduce((value,ele)=>{
            console.log(value)
            return value * ele
        },50);
        return multiplication
    }
    else{
        console.log("given mode is not in add, sub, mul")
    }
}
operation("div",1,2,3,4,5,6)