// sum of natural number
// 1. Write a program to caliculate sum of natural number from 1 to n using for loop.

// const n = 10;
// let sum = 0;
// for (i = 1; i<=n; i++){
//     sum+=i;
// }
// console.log(sum);






// // Factorial of a number
// // 2. Write a program to caliculate the factorial of a number n using for loop.

// const factorialof = 5;
// let factorial = 1;
// for(i = 1; i<=factorialof; i++){
//      factorial *=i;
// }
// console.log('factorialof 5 is',factorial);

// Fibonacci series



// 3.Generate and print the first n term of the fibonacci series.

// const n =7;//(enter the number of terms)
// let n1 = 0, n2 = 1,next;
// console.log('Fibonacci series:');
// for(let i=1; i<=n;i++){
//     console.log(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;

// }


// const n =12;//(enter the number of terms)
// let n1 = 0, n2 = 1,next;
// console.log('Fibonacci series:');
// for( i=2; i<=n;i++){
//     console.log(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;

// }





// 4.write a program to print a given number 'n' of a table using for loop:

// const n = 10;

// for(i = 1; i<=10;i++){
//     const result = n * i;
//     console.log(`${n}*${i} = ${result}`)
// }

// const n = 5;
// for(i=1;i<11;i++){
//     const result = n * i;
//     console.log('n*i = result',result);
// }

// const n = 9;
// for(i = 1; i<11; i++){
//     const result = n*i;
//     console.log(`${n}*${i}= ${result}`);
// }





// 5. revesing astring
// Write a program to print the given string is reverse
// const str = 'manam';
// let reverse = '';
// for(let i = str.length-1;i>=0;i--){
//     reverse += str[i];
// }
// console.log('reverse of a given string is:', reverse);





// 6. Write a program to check if the given number 'n' is prime using javascript

// function isprime(n){
//     if(n<2){
//         return `${n} is not a prime number`;
//     }
//     for(let i = 2; i<n; i++){
//         if(n%2 === 0){
//            return `${n} is not a prime number`;
//         }
        
//     }
//     return `${n} is a prime number`;

// }
// console.log(isprime(10));

// function isprime(n){
//     if(n<2){
//         return `${n}is not a prime number`;
//     }
//     for(let i = 2; i <= n; i++){
//         if(n % 2 ===0){
//             return `${n} is not a prime number`;
//         }
//     }
//     return `${n} is prime number`;
// }
// console.log(isprime(12));





// 7. //writ a program to count the numer of digits in a given numbe using for loop.
// const n = 1234567890;
// let count = 0;
// let temp = n;
// while(temp !==0){
//     count++;
//     temp = Math.floor(temp/10);
// }
// console.log(count);





// 8. write a program to print a pattern of using a for loop.
//  const rows = 5;
//  for (i =1; i<=rows; i++){
//     let pattern = "";
 
//  for(let j=1; j<=i; j++){
//     pattern +="*";
//  }
//  console.log(pattern);
// }

// const n = 5;
// for (i =1; i<=n; i++){
//    let pattern = "";

// for(let j=1; j<=i; j++){
//    pattern +="*";
// }
// console.log(pattern);
// }





// 9. find largest element in an array using for loop.
// const numbers = [4,7,9,3,5,8];
// let largest = numbers[0];
// for(i = 1; i<numbers.length;i++){
//     if(numbers[i]>largest){
//         largest = numbers[i];
//     }
// }
// console.log(largest);

// const numbers = [11,10,12,9,8,20];
// let largest = numbers[0];
// for (let i = 1;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         largest = numbers[i];
//     }   
// }
// console.log(largest);




// 10. write a program to reverse the elements of an array using for loop.
// const Array = [1,2,3,4,5,6,7,8,9];
// let reversedArray = [];
// for(let i = Array.length-1; i>=0;i--){
//     reversedArray.push(Array[i]);
// }
// console.log(reversedArray);

// const Array = [5,4,3,2,1];
// let reversedArray =[];
// for (i = Array.length-1;i>=0;i--){
//     reversedArray.push(Array[i]);
// }
// console.log(reversedArray);

// const Array = [5,4,3,2,1];
// let reversedArray = [];
// for(let i = Array.length-1;i>=0;i--){
//     reversedArray.push(Array[i]);
// }
// console.log(reversedArray);


// 11. Write a program to reverse a given string using for loop

// const String = "Hello";
// let reverse = "";
// for(i = String.length-1;i>=0;i--){
//     reverse += String[i];
// }
// console.log(reverse);




// // 12. find the largest element of an given array using for loop.
// const number = [1,50,22,75,91];
// let largest = [0];
// for(let i = 1; i<number.length;i++){
//     if(number[i]>largest){
//         largest = number[i];
//     }
// }
// console.log(largest);



// 13 Write function 'countChar' that takes a string and a charector as a input  returns the number of times that charector appears in the string.




// 14 Remove the duplicates of an Array:
//  write a program removeduplicates that takes an array of number as input and returns a new arry with duplicate value removed.

const Array = [1,2,1,3,4,3,5,6];
function removeduplicates(arr){
    return[...new set (Array)];
};
console.log(removeduplicates(Array));


























































