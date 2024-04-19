//  1 task starts 

// let array = ["text", "world", "laptop"];
// let length = 0
// for (let i = 0; i < array.length; i++) {
//     length = array[i].length
//     console.log(`${array[i]} ${length}`);
// }

// 1 task finished 


// 2 task starts 
// function minMaxWord(sentence) {
//     const words = sentence.split(" ");
    
//     let minWord = words[0];
//     let maxWord = words[0];

//     for (let word of words) {
//         if (word.length < minWord.length) {
//             minWord = word;
//         }
//         if (word.length > maxWord.length) {
//             maxWord = word;
//         }
//     }

//     return { minWord, maxWord };
// }

// console.log(minMaxWord("Men dasturlash kursida o'qiyman"));
// 2 task finished

// 3 task starts 


// function getLevel (n) {

//     let result = []

//     for (let i = 0; i <= n; i++) {
//         result.push(Math.pow(2,i))
//     }
//     return result
// }

// console.log(getLevel(5));

// 3 task finished 

//  4 task starts 

// function findMinWord (params) {
//     let arr = params.split(" ").filter(item => item !== "")
//     let minWord = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (minWord.length > arr[i].length) {
//             minWord = arr[i]
//         }
//     }
//     console.log(minWord);
// }
// findMinWord(" Yozilgan text ichidagi eng kichik length bolgan textni chiqaradi ")

// 4 task finished 

// 5 task starts 
// function findNNumber(obj, n) {
//     const result = {};

//     for (const key in obj) {
//         result[key] = obj[key] * n;
//     }

//     return result;
// }

// const obj = { a: 3, b: 4, c: 5, d: 6 };
// const n = 5;

// console.log(findNNumber(obj, n));
// 5 task finished 


// 6 task starts 


// function countDigits(str) {
//     let regex = /\d/g;


//     const matches = str.match(regex);

//     if (matches) {
//         return matches.length;
//     } else {
//         return 0; 
//     }
// }

// const inputString = "Yozilgan 123 ichida 456789 ta nomer bor"; 
// console.log(countDigits(inputString)); 
// 6 task finished 


// 7 task starts 

// const sumDigits = (...numbers) => {
//     let sum = numbers.reduce((item, index) => item + index, 0);
//     let result = sum.toString().split('').map(Number);
//     return result;
// };

// console.log(sumDigits(1, 22, 3));
// 7 task finished 

// 8 task starts 

// function findStrA (params) {
//     let a = 0

//     let arr = Array.from(params)

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "a" ||  arr[i] == "A"){
//             a++
//         }
//     }
//     return `kiritilgan so'zda ${a} ta a bor `
// }

// console.log(findStrA("agar sozda nechta a bor ekanini topa olsang"));
// 8 task finished 


//  9 task starts 


// function findRow (params) {

//     let n = 1

//    while (params !== 2) {
//     params /= 2
//     n++
//    }
//    return `2 ni ${n}`

// }

// console.log(findRow(8));