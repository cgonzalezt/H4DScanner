let counter=0;

let boxcounter=0;

function incrementCounter(){
    counter++;
}
function incrementboxCounter(){
    boxcounter++;
}

function decreaseCounter(){
    counter--;
}

function decreaseboxCounter(){
    boxcounter--;
}

function getcounter() {
    return counter;
}

function getboxcounter() {
    return boxcounter;
}

export {incrementCounter,incrementboxCounter,decreaseCounter,getcounter,getboxcounter}