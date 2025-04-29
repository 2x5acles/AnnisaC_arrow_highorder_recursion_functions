//Function 1 
function greet(name){
    return "Hello," + name + "!";

}
const greet = (name) => {
    return "Hello," + name + "!"
}
const greet = name => "Hello" + name + "!";

//Function 2

function square (number){
    return number * number;
}

const square = number => {
    return number * number;
}
const square = number => number * number;

//function 3
function isEVen(number) {
    if (number % 2 === 0) {
        return true;
    } else { 
        return false; 

    }
}

const isEven = (number) => {
    if (number % 2 ==== 0) {
        return true; 
    } else {
        return false;
    }

    };

    const isEVen = number => number %2 === 0;
    

