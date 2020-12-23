console.log("searching for an element in a string")
var asa = (source) => { 
    out = source.search( 'g' );
    if(out >= 0){
        console.log( "the index of the given charecter is : ",out );
    }
    else{
        console.log("element not found in a string");
    }
};
asa("sandhya"); 
