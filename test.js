// function stringCountTest(str) {
//     let countString={}
//     for (let i = 0; i < str.length; i++) {
//         char = str[i];
//         if (countString[char]) {
//             countString[char] +=1
//         } else {
//             countString[char] =1
//         }
        
//     }
//     return countString
// }

// // console.log(stringCountTest('hello'))
// //write a function that tells you if the words are anagram of each other
// // ex: racecar and car race is anagram or abc , cab are anagrams
// function anagramsTest(str,str2) {

//     if(str.length!==str2.length){
//         return false
//     }
//     let frequencyCounter1={}
//     let frequenceycounter2={}
//     for (const char of str) {
//         if (frequencyCounter1[char]) {
//             frequencyCounter1[char] +=1
//         } else {
//           0
//  for(let i=0;i<str1.length;i++){
//    element= str1[i]
//      if(lookup[element]){
//          lookup[element]+=1
//      }else{
//         lookup[element] = 1
//     }
//  }
//  console.log(lookup)
//  for (let i = 0; i < str2.length; i++) {
//     const element = str2[i];
//     if(!lookup[element]){
//         return false
//     }
//     else{
//         lookup[element] -=1
//     }
   
    
//  }

// //  return `this is a test ${lookup}`
// return true

//     }

//     // console.log(sameFrequency1(123456, 123456789))


//     function sameFrequencyNums(num1, num2) {
//         let num1_dict = {};
//         let num2_dict = {};
//         for (let i of num1.toString()) {
//             if (num1_dict[i]) {
//                 num1_dict[i] += 1;
//             } else {
//                 num1_dict[i] = 1;
//             }
//         }
//         for (let i of num2.toString()) {
//             if (num2_dict[i]) {
//                 num2_dict[i] += 1;
//             } else {
//                 num2_dict[i] = 1;
//             }
//         }
//         for (let key in num1_dict) {
//             if (num1_dict[key] !== num2_dict[key]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// console.log(sameFrequencyNums(123456,132457))


function solution(inputString) {
    inputString = inputString.replace(/[^a-z0-9]/gi, '');

    let reverseSolution = inputString.split('').reverse().join('')
    if(reverseSolution ===inputString){
        return true
    }else{ return false}

    }

    console.log(solution('taco cat'))

