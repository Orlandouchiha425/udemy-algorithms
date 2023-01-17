//indexOf, Includes, find, findIndex
//searches one item at a time, goes through the whole array
function linearSearch(arr,val) {
    for (let i = 0; i < arr.length; i++) {
        let element=arr[i]
         if (element===val) {
            return i
        }
    } 
    return -1
        }

console.log(linearSearch([1,3,4,6], 6))