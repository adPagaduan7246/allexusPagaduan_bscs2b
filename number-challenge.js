/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

const num1 = 10
const num2 = 7
const num3 = 8

function sum(num1, num2, num3){
    console.log("SUM: ", num1 + num2 + num3)
}

function difference(num1, num2){
    console.log("DIFFERENCE: ", num1 - num2)
}

function product(num1, num2){
    console.log("PRODUCT", num1 * num2)
}

function average(num1, num2){
    const num3 = num1 + num2
    console.log("AVERAGE", num3/2)
}

sum(num1, num2, num3)
difference(num1, num3)
product(num2, num3)
average(num1, num2)