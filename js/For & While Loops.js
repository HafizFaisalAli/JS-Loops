// Question 1  

// for (num = 1; num <= 10 ; num++){
//     console.log("Number is = "+ " "+ num)
// }


// let num = 1;
// while (num <= 10){
//     console.log("Number is ", num);
//     num++
// }

// End ... 

// Question 2

// for (num = 10 ; num >=1 ; num--){
//     if (num == 1){

//     }
//     console.log("Number is ", num)
// }

// let num = 10 ;

// while (num >= 1){
//     console.log("Number is ", num)
//     num--
// }

// End ...

// Question 3

// for (num = 1 ; num <= 100 ; num++ ){
//     if (num % 2 == 0){
//         console.log("Even Number is", num)
//     }
// }

// let num = 1;

// while (num <= 100){
//     if (num % 2 == 0){
//         console.log("Even Number is", num)
//     }
//     num = num + 1
// }

// End ... 

// Question 4

// for(num = 1; num <= 100; num++){
//     if (num % 2 != 0){
//         console.log("Odd Number is ", num)
//     }
// }

// let num = 1;

// while (num <= 100){
//     if (num % 2 != 0){
//         console.log("Odd Number is", num)
//     }
//     num++
// }

// End ... 

// Question 5 

// let sum = 0;

// for (let num = 1; num <= 100; num++){
//     sum = sum + num
// }
// console.log(sum)

// let sum = 0;
// let num = 0;

// while (num <= 10){
//     sum = sum + num;
//     num++;
// }
// console.log(sum)

// End ... 

// Question 6

// let sum = 0;

// for (let num = 1; num <= 10; num++){
//     if (num % 2 == 0){
//      sum = sum + num
//     }
// }
// console.log(sum)

// let sum = 0;
// let num = 1;

// while(num <= 10){
//     if (num % 2 == 0){
//         sum = sum + num
//     }
//     num++
// }
// console.log(sum);

// End ... 

// Question 7 

// let sum = 0;

// for (let num = 1; num <= 10; num++){
//     if (num % 2 != 0){
//         sum = sum + num
//     }
// }
// console.log(sum)

// let sum = 0;
// let num = 1;

// while (num <= 10){
//     if (num % 2 != 0){
//         sum=sum+num
//     }
//     num++
// }
// console.log(sum)

// End ... 

// Quesion 8 

// let table = +prompt("Enter any Number");

// for (let num = 1; num <= 10; num++){
//     console.log(`${table} X ${num} = ${table*num} `);
// }

// let table = +prompt("Enter any table");
// let num = 1;

// while (num <= 10){
//     table = table + num;
//     console.log(`${table} X ${num} = ${table*num} `);
//     num++;
// }

// End ... 

// Question 9

// let val = +prompt("Enter your number");
// let store = 1;
// for (num = 1; num <= val; num++){
//     store = store * num;
// }

// console.log(`Factorial of ${val} is = ${store}`)

// End ... 

// Question 10 

let cube = +prompt("Enter any number");
// let store = 0;

// for (let num = 1; num <= cube; num++){
//     store = num*num*num
// }
// console.log(`The Number of is: ${cube} and the cube of ${cube} is: ${store} `)

// End ... 

// Question 11 

let get = +prompt("Enter any number");
let store = 0;

for (num =1; num <= get; num++){
    store = store + num;

}
console.log(`The sum of first ${get} numbers: ${store}`)