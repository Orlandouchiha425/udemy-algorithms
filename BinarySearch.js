// //binarySearch, all this does is give you an array and a vlue.
// // ex, console.log(Search1([1,2,3,4,5,6],4)), this means look through your array and find the INDEX and Return the index location
// // in the example above,it return 3 , because 4 is located in index 3
// //NAIVE Solution Below
// function Search1(arr, val) {
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]===val){
//             return i
//         }
//     }
//     return -1
// }

// // console.log(Search1([1,2,3,4,5,6],4))//index 3

// This function accepts a sorted array and array value 
//Create a left pointer at the start of the array , and a right pointer
//While the left pointer comes before the right pointer:
    // Create a pointer in the middle
    //If you find the value you want, return the index
    // if the value is too small, move the pointer up
    // if the the value is too large, move the right pointer down
    //if you Never find the value, return -1
// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

function divideAndConquear1(arr, num) {
    let leftPointer=0;
    let rightPointer= arr.length -1

    let sortedArr = arr.sort(function(a,b){
        return a-b
    })
    console.log(sortedArr)
for (let i = 0; i <= sortedArr.length; i++) {
        middleNum = Math.floor((leftPointer + rightPointer) /2 )
      if (sortedArr[middleNum] < num) {
        leftPointer = middleNum +1
      }else if(sortedArr[middleNum] > num){
        rightPointer = middleNum - 1
      }
      else{ 
        return `This is the middle ${middleNum}`}
    
}
return  -1
}


console.log(divideAndConquear1([1,7,3,4,8,6,5],3))