let counter=0;

function incrementCounter(){
    counter++;
}
function decreaseCounter(){
    counter--;
}

function getcounter() {
    return counter;
}

export {incrementCounter,decreaseCounter,getcounter}