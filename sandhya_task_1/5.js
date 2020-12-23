// reverse an array
const rev = (my_arr) =>{
    if( my_arr.length==0){
        console.log("elements are not found in array")
    }
    else if( my_arr.length == 1){
        console.log(my_arr);
    }
    else{
        console.log(my_arr.reverse());
    }
};
rev(["sdhsj","hgv"]);