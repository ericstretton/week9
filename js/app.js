// Array 1 - userAge, counter, length of 4, acceptable or unacceptable age requirement: either choice displays twice

var userAge = [16, 17, 19, 25];
for (let counter = 0; counter < userAge.length; counter++) {
    console.log(userAge[counter]);
    if (userAge[counter] < 18) {
        console.log('Ineligable Age');
    }else if (userAge[counter] >= 18) {
        console.log('Welcome');
    }else{
        console.log('Error');
    }
    
}

// Array 2 - isSubscribed, counter, length of 4, is or isn't subscribed: either boolean displays twice

var isSubscribed = [true, false, true, false];
for (let counter = 0; counter < isSubscribed.length; counter++) {
    console.log(isSubscribed[counter]);
    if (isSubscribed[counter] == false){
        console.log("Please Subscribe");
    }else if (isSubscribed[counter] == true){
        console.log('Welcome');
    }else{
        console.log('Error');
    }
    
}



// if (userAge[0,1] < 18 && isSubscribed[1,3] ==false){
//     console.log("Go away!");
// }else if((userAge[2,3] >= 18) && (isSubscribed[1,3] ==false)){
//     console.log("Welcome, Please Subscribe!");
// }else if((userAge < 18) && (isSubscribed ==true)){
//     console.log("Limited Access Granted, Welcome!");
// }else if(userAge >= 18 && isSubscribed ==true){
//     console.log("Welcome!");
// }else {
//     console.log("Error");
// }

