//printing elements with 'a'

const element = (myarr , arr1) =>{
    // let myarr = ["hello","hdawjhd","jdfhjes","sandhya"];
    // var arr1 = [];
    for (var i = 0 ; i<myarr.length ; i++){
        var variable = myarr[i];
        for (var j=0 ; j<variable.length ; j++){
            if(variable[j] == "a"){
                arr1.push( variable );
                break;
            }
        }
    }
    console.log( arr1 );
};
element(["hello","hdawjhd","jdfhjes","sandhya"] , arr1 = []);
