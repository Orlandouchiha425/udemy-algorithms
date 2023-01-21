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

// ///Refactor binary Search
// function Search(array, val) {
//     let min = 0;
//     let max = array.length -1

//     while (min <= max) {
//         let middle = Math.floor((min + max ) /2);
//         let currentElement = array[middle]

//         if(currentElement < val){
//             min = middle + 1
//         }
//         else if(currentElement> val){
//             max = middle -1
//         }else{
//             return middle
//         }
       
//     }
//     return -1 
// }


// console.log(Search([1,2,3,4,5,6],1))



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