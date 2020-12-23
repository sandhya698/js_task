console.log("search for an element in an array")

var element = (arr,s) => {
    for (var i = 0 ; i <= arr.length ; i++){
        if( arr[i] == s ){
            console.log(`element ${s} found at index : `,i );
            break;
        }
        else{
            console.log(`element ${s} not found`);
            break;
        };
    };
};
element(['js','c','c++'],'s');
