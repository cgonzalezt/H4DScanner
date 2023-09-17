let counter=0;

let boxcounter=0;

let pointscounter=0;

function incrementpointscounter(){
    pointscounter = pointscounter + 25;
}

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

function decreasepointsCounter(){
    pointscounter = pointscounter - 25;
}

function getcounter() {
    return counter;
}

function getboxcounter() {
    return boxcounter;
}

function getpointscounter(){
    return pointscounter;
}

export {incrementCounter,incrementboxCounter,incrementpointscounter,decreaseboxCounter,decreasepointsCounter,
    decreaseCounter,getcounter,getboxcounter,getpointscounter}