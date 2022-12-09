//binarySearch, all this does is give you an array and a vlue.
// ex, console.log(Search1([1,2,3,4,5,6],4)), this means look through your array and find the INDEX and Return the index location
// in the example above,it return 3 , because 4 is located in index 3
//NAIVE Solution Below
function Search1(arr, val) {
    for(let i = 0; i<arr.length;i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}

// console.log(Search1([1,2,3,4,5,6],4))//index 3

///Refactor binary Search
function Search(array, val) {
    let min = 0;
    let max = array.length -1

    while (min <= max) {
        let middle = Math.floor((min + max ) /2);
        let currentElement = array[middle]

        if(currentElement < val){
            min = middle + 1
        }
        else if(currentElement> val){
            max = middle -1
        }else{
            return middle
        }
       
    }
    return -1 
}


console.log(Search([1,2,3,4,5,6],1))