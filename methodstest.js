// nums = [3.95,5,6,8]
// total=nums.reduce((accumulator,currentvalue, idx)=>{
//     return accumulator - currentvalue
// },0)

// console.log(total)


//  function twoSum(nums, target){

// let newTarget = nums -target
    

// };
// console.log(twoSum([2,7,11,15],9))

// const nums=[3.95,5,6,8]
// const totalNums= nums.reduce((currentTotal,item,idx)=>{
//     return currentTotal +item
// },0)
// console.log(totalNums)


// function miniMaxSum(arr) {

// }


function miniMaxSum(arr) {
    totalArr= arr.sort(function(a,b){
        return a-b
    })
let min =0
let max=0
for(let i=0; i< totalArr.length-1; i++){
     min +=totalArr[i]
}
for(let i=1; i< totalArr.length; i++){
    max +=totalArr[i]
}
console.log(min + " " + max)
 }
 console.log(miniMaxSum([1,3,5,7,9]))


