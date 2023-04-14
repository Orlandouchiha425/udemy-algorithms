function TwoSum(nums, target) {
    number ={}
    for(let index=0; index<nums.length; index++){
        currentValue = nums[index]
        neededTarget = target - currentValue
        index2=number[neededTarget]
        if(index2 !=null){
            return [index2,index]
        }else{
            number[currentValue]=index
        }
    }
};


function twoSum2(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in map) {
        return [map[complement], i];
      }
      map[nums[i]] = i;
    }
    throw new Error('No two sum solution');
  }
  

  function twoSum3(nums, target) {
    console.log("Starting function");
    const map = {};
    console.log("Created empty map:", map);
    for (let i = 0; i < nums.length; i++) {
      console.log(`Looping through index ${i}`);
      const complement = target - nums[i];
      console.log(`Calculated complement ${complement} for number ${nums[i]}`);
      if (complement in map) {
        console.log(`Complement ${complement} is in map, returning indices [${map[complement]}, ${i}]`);
        return [map[complement], i];
      }
      console.log(`Complement ${complement} is not in map, adding number ${nums[i]} to map with index ${i}`);
      map[nums[i]] = i;
      console.log("Current map:", map);
    }
    console.log("No solution found, throwing error");
    throw new Error('No two sum solution');
  }
  
console.log(twoSum3([1,4,2,6,7],10))