function FrequencyAnagram(str1,str2) {
    if(str1.length!==str2.length){
        return false
    }
    let frequencyCounter1 ={}
    let frequencyCounter2 ={}
    for(let words of str1) {
        if (str1[words]) {
            frequencyCounter1 +=1
            
        }else {
          frequencyCounter1 =1  
        }
    }

    for (const words of str2) {
        if(str2[words]){
            frequencyCounter2 +=1
        }else {
            frequencyCounter2 =1  
          }

    }

    for (const string in frequencyCounter1) {
        if(!(string in frequencyCounter2)){
return false
        }if(frequencyCounter2[string] !== frequencyCounter1[string]){
            return false
        }
    }
return true
}

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
  
//     const lookup = {};
  
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
  
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
  
//     return true;
//   }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  console.log(FrequencyAnagram('anagrams', 'anagramst'))