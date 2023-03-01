// Merges two already sorted arrays
// this code will merge two arrays
//ex: merge([1,10,50], [2,14,99,100])
    //  I           J
//merge([1,10,50], [2,14,99,100])
//we will compare the first indexes of both arrays, then return the smallest one
//this case we will return results[1]
        //I       J           
//merge([10,50], [2,14,99,100])
// now we compare both arrays again, and return the smallest one
//results[1,2]
//now we compare 10 and 14
//so we have results[1,2,10]
//we do the same thing until we go over the whole array, if theres anything 
// once we finish over the whole array, since both arrays are initially sorted we just push the rest of the array
//ex: results[1,2,10,14,50]   but we still got [99,100] from the second array. since everythng is already sorted we push the rest into results
//results[1,2,10,14,50,99,100]   
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}



                   


// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, sright);
}

mergeSort([10,24,76,73])



