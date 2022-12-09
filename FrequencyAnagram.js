//write a function that tells you if the words are anagram of each other
// ex: racecar and car race is anagram or abc , cab are anagrams
function FrequencyAnagram(str1,str2) {
   //since we comparing anagrams, if the length is not the same.code below just returns false and we are done
    if(str1.length!==str2.length){
        return false
    }
    //objects are great for quick access, adding arrays or numbers of strings
    //code below we iniialized two empty objects
    let frequencyCounter1 ={}
    let frequencyCounter2 ={}
    //for of loops are great for objects, arrays or string
    //code below just says , our first word named str1, we assigned a value of words

    for(let words of str1) {
        //code below says while looping through str1, at every letter if it exists adds 1
        if (str1[words]) {
            frequencyCounter1 +=1
         //else if it doesnt exists we initialize at 1   
        }else {
          frequencyCounter1 =1  
        }
    }

    //same thing as above, in my code below
    for (const words of str2) {
        if(str2[words]){
            frequencyCounter2 +=1
        }else {
            frequencyCounter2 =1  
          }

    }

    //here comes fun part, now that we have our objects, 
//ex: car  and rac, it will add a 1 to every letter in our object
//so we loop through our object frequencycounter1 named a key as string
  
    for (const string in frequencyCounter1) {
//code below states, if the letter in frequencey counter 1 !(means not or does not) exisist
//in frequenceycounter2 object, we return false automatically
        if(!(string in frequencyCounter2)){
return false
        }
        //if frequenceycounter2(we are still using string is in the same loop)Letter 
        //or string does not exists in frequencycounter1(letter/string) also return false
        if(frequencyCounter2[string] !== frequencyCounter1[string]){
            return false
        }
    }
    
    //otherwise return true
return true

}


//UDEMY SOLUTION

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   console.log(FrequencyAnagram('anagrams', 'anagramst'))


  //Youtube Solution

  function anagram2(s,t) {
    let hist = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char in hist){
            hist[char]++
        }else{
            hist[char]=1
        }
    }
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if(char in hist){
            hist[char] --
        }else{
            return false
        }
    }
    for (const key in hist) {
     if(hist[key]){
        return false
     }
            
        }
        return true
    }
  

    console.log(anagram2('racecars', 'carrace'))
    console.log(anagram2('abc','acd'))