///this is to compare data and see if they are the same or anagrams of one another
//similar values if value is contain of one another, of two or more data/array
// Example Same and Same2 we are just checking if is an anagram SQUARED of arr1
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let number of arr1){
//         // frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1
//         if(frequencyCounter1[number]){
//             frequencyCounter1[number] += 1;
//          } else {
//             frequencyCounter1[number] = 1;
//          }
//         }

//     for(let number of arr2){
//         // frequencyCounter2[number] = (frequencyCounter2[number] || 0) + 1
//         if(frequencyCounter2[number]){
//             frequencyCounter2[number] += 1;
//          } else {
//             frequencyCounter2[number] = 1;
//          }
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// console.log(same([1,2,3,2,5], [1,4,9,4,25]))

// Line 10-12 it really just translates to the following

// if(frequencyCounter1[val]){
//     frequencyCounter1[val] += 1;
//  } else {
//     frequencyCounter1[val] = 1;
//  }

// function same2(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//          if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// same2([1,2,3,2], [9,1,4,4])

// const sameFrequency = (arr1, arr2) => {
//     if(arr1.length !== arr2.length){
//       return false
//     }
//     const counter1 = {}// frequency counter for arr1
//     const counter2 = {} // frequency counter for arr2
//     for(let num of arr1){
//       console.log(arr1)
//       if(counter1[num]){
//         console.log('I am running because ', num, ' is already been added to the object', counter1)
//         counter1[num]++
//         console.log(`I just added ${num} to the object`, counter1)
//       } else {
//         console.log('I am running because ', num, ' hasn\'t already been added to the object', counter1)
//         counter1[num] = 1
//         console.log(`I just added ${num} to the object`, counter1)
//       }
//     }
//     console.log(counter1)
//   }

// const sameFrequency2 = (arr1, arr2) => {
//     if(arr1.length !== arr2.length){
//       return false
//     }
//     const counter1 = {}// frequency counter for arr1
//     const counter2 = {} // frequency counter for arr2
//     for(let num of arr1){
//       if(counter1[num]){
//         counter1[num]++
//       } else {
//         counter1[num] = 1
//       }
//     }

//     for(let num of arr2){
//       if(counter2[num]){
//         counter2[num]++
//       } else {
//         counter2[num] = 1
//       }
//     }

//     for(let key in counter1 ){
//       console.log(`key is ${key} which is equal to ${counter1[key]} `,`the corresponding squared key is ${key ** 2} which is ${counter2[key ** 2]}`)
//       if(counter1[key] !== counter2[key ** 2]){
//         return false
//       }
//     }
//     return true
//   }

// console.log(sameFrequency([1,2,3], [4,1,9])) // true)
// console.log(sameFrequency([1,2,3], [1,9])) // false

function frequencyTest(string1, string2) {
  let emptyObj = {};
  if (string1.length !== string2.length) {
    return `is not a anagram so is ${false}`;
  }
  for (let i = 0; i < string1.length; i++) {
    const element = string1[i];
    if (emptyObj[element]) {
      emptyObj[element]++;
    } else {
      emptyObj[element] = 1;
    }
    console.log(emptyObj);
  }
  for (let i = 0; i < string2.length; i++) {
    const element = string2[i];
    if (!emptyObj[element]) {
      return false;
    } else {
      emptyObj[element] -= 1;
    }
  }
  return true;
}
console.log(frequencyTest("racecar", "carraec"));
// console.log(frequencyTest([1,2,3],[2,3,16]))
