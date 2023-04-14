function sortfunc(nums1,nums2) {
    let i = 0;
    let j = 0;
    let results =[]
    median =[]
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            results.push(nums1[i])
            i++
        }  if(nums1[i]>nums2[j]){
            results.push(nums2[j])
            j++
        } 
    }

    while(i<nums1.length){
        results.push(nums1[i])
        i++
    }
    while(j<nums2.length){
        results.push(nums2[j])
        j++
    }
    // median = (results.length +1) /2
    // return median
      
    const n = results.length;
    if (n % 2 == 0) {
      // even number of elements
      return (results[n / 2 - 1] + results[n / 2]) / 2;
    } else {
      // odd number of elements
      return results[Math.floor(n / 2)];
    }
}
console.log(sortfunc([1,4], [2,3]))
