

//excercise #1 arrow functions

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

    //Exercise #2 High Order Function 
    

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbersSquared = numbers => {
  return numbers
    .filter(num => num % 2 === 0)
    .map(num => num ** 2);
};

console.log(evenNumbersSquared(numbers)); // Output: [4, 16, 36, 64, 100]

//PART 2 

const prices  = [10.99, 5.49, 12.99, 8.75, 15.20];
const calculateDiscountedTotal = prices => {
    return prices.reduce((total, price) => {
      const discounted = price * 0.8;
      console.log(`Original: $${price} → Discounted: $${discounted}`);
      return total + discounted;
    }, 0);
  };

const words =["apple", "banana", "cherry", "date",  "elderberry"];

const findWordsWithA = words => {
    return words.find(word => word.includes('a'));

};

console.log(findWordsWithA(words));  // output apple


//Excercise 3 


Const sumofArray = (arrayOfNumbers) => {
    if (arrayOfNumbers.length === 0) {
        return 0;
    }
    return arrayOfNumbers[0] + sumofArray(arrayOfNumbers.slice(1))
}
]