const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/
even = [1, 2, 3, 4, 5]
odd = [1, 2, 3, 4, 5]
evenIndex = 0
oddIndex = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0){
        even[evenIndex] = arr[i]
        evenIndex++
    }
    else {
        odd[oddIndex] = arr[i]
        oddIndex ++
    }
}

console.log("EVEN NUMBERS:")
for (i = 0; i < even.length; i++){
    console.log(even[i])
}
console.log("ODD NUMBERS:")
for (i = 0; i < odd.length; i ++){
    console.log(odd[i])
}
