console.log("converting minutes to seconds ")
var time = (minutes) =>{
    if(minutes >= 1){
        var seconds = minutes * 60;
        console.log(`number of seconds for ${minutes} minutes are : `, seconds );
    }
    else{
        console.log("enter time in minutes");
    };
};
time(8);