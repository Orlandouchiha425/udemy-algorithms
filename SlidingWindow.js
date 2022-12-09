// // //Naive approach-dont use this

function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
      console.log(temp,max)
    }
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


//   //SLIDING WINDOW Approach
//   //Explanantion what that is, imagine we have a string "hellothere", sliding window allows you to search all unique letters consecutive.
//   //in this case, the unique letters are hel    lother  e .   because thats where it stops repeating itself and returns the longest length
//   //so the answer here is lother



  function maxSubarraySum(arr, num){
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
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


