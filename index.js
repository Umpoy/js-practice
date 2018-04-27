// Challenge
// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

// Sample Test Cases
// Input:"coderbyte"
// Output:"etybredoc"
// Input:"I Love Code"
// Output:"edoC evoL I"

console.log(FirstReverse("coderbyte"));
console.log(FirstReverse("I Love Code"));

function FirstReverse(str) {
    let split = str.split('');
    let reverse = split.reverse();
    let join = reverse.join('');
    return join;
}