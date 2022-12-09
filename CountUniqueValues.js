/// implement a function called Count unique values, which accepts a sorted array, and counts the 
//Unique values in the array. There can be negative numbers in the array, but 
//it will always be sorted
// function countUniqueValue(arr) {
//     let newArr =arr.sort()
//     let obj={}
//     let i=0
//     let j=1
//     for (const nums of newArr) {
//         number=newArr[nums]
//        if(number){
//         obj.push(number)
//        } 
//     }

// }



//udemy solution 
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValue([1,1,1,1,1,2]))
