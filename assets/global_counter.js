let counter=0;

let boxcounter=0;

let pointscounter=0;

let savecounter=0.0;

function incrementpointscounter(){
    pointscounter = pointscounter + 25;
}

function incrementCounter(){
    counter++;
}
function incrementboxCounter(){
    boxcounter++;
}
function incrementSaveCounter(){
    old = savecounter;
    old += 0.1;
    savecounter = Math.round(old*1.1*100) / 100;
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

function getSaveCounter(){
    return savecounter;
}

export {incrementCounter,incrementboxCounter,incrementpointscounter,incrementSaveCounter,decreaseboxCounter,decreasepointsCounter,
    decreaseCounter,getcounter,getboxcounter,getpointscounter,getSaveCounter}