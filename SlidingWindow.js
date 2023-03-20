// // //Naive approach-dont use this

// function maxSubarraySum(arr, num) {
//     if ( num > arr.length){
//       return null;
//     }
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i ++){
//       temp = 0;
//       for (let j = 0; j < num; j++){
//         temp += arr[i + j];
//       }
//       if (temp > max) {
//         max = temp;
//       }
//       console.log(temp,max)
//     }
//     return max;
//   }
  
//   maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


//   //SLIDING WINDOW Approach
//   //Explanantion what that is, imagine we have a string "hellothere", sliding window allows you to search all unique letters consecutive.
//   //in this case, the unique letters are hel    lother  e .   because thats where it stops repeating itself and returns the longest length
//   //so the answer here is lother

//Problem: create a function where

  function maxSubarraySum1(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    //this if just says if nums/ the array is less than the nums we just return null 
    if (arr.length < num) return null;
    // first loop, it adds the first 3 numbers or  num. and instead of 
    //ex: if we had arr of [1,2,3,4,5,6] we add the first Nums, thats a must so we dont worry 
    for (let i = 0; i < num; i++) {
      //maxSum adds all nums  as long as is less than NUM per our for loop
      maxSum += arr[i];
      console.log(`this is a test  of max sum ${maxSum}`)
    }
    //tempsum becomes max sum
    tempSum = maxSum;
    //since we already added the first lets say 3 nums .we can start at nums in this scenario we start at 2(remember nums is just saying index)
    //, this does not change from the amount of numbers ,3,4 10
    for (let i = num; i < arr.length; i++) {
      //this part is saying my tempsum 2+6+9= 17 
      //17 = 17 - arr[i -num]+ 2/..next indes
      //lets summarize what arr[i] means, arr[i] means index, so if we are in index3, we subtract the initial index, and then we add the next index at + arr[i]
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  console.log(maxSubarraySum1([2,6,9,2,1,8,5,6,3],3))
  
// sliding windows consists of the following
// create a function that adds the num numbers in the array together and returns the longest number by adding them


function maxSubarraySum2(arr, num) { 
 
  if (arr.length < num) return null;
 
  let i = 0;
  let maxSum = 0;
  let tempSum = 0;
 
  for (let j = 0; j < arr.length; j++ ) {
    tempSum += arr[j];
 
    // this means we're over "num" index and we have a full window
    if (j >= num - 1) {
 
      // assign a new max value
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
 
      // subtract the first element from the window and continue
      tempSum -= arr[i];
      i++;
    }
  } 
  return maxSum; 
}

// console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3))

//Write a function called maxSubarraysum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n.
//consecutive elements in the array.
// maxSubarraySum([1,2,5,2,8,1,5],2) answer: 10 because the largest 2 consecutive numbers is 8+2
// maxSubarraySum([1,2,5,2,8,1,5],4) answer: 17

function maxSubarraySum3(arr, num){

  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {

    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// maxSubarraySum3([2,6,9,2,1,8,5,6,3],3)

// arr[i-num] means , we started at num the loop , we havent done any increases yet, but we do arr[i] 
//or index 3 or better described to arr[2] then negative - num,
// im assuming that means we go back  3 indexes and thats also a 2, so we subtract those arr[2 -2]  + arr[i] arr[2]



