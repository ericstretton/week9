var userAge = 17;

var is_subscribed = true;

if (userAge < 18 && is_subscribed == false){
    console.log("Go away!");
}else if((userAge >= 18) && (is_subscribed ==false)){
    console.log("Welcome, Please Subscribe!");
}else if((userAge < 18) && (is_subscribed ==true)){
    console.log("Limited Access Granted, Welcome!");
}else if(userAge >= 18 && is_subscribed ==true){
    console.log("Welcome!");
}else {
    console.log("Error");
}

