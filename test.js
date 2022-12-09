function stringCountTest(str) {
    let countString={}
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (countString[char]) {
            countString[char] +=1
        } else {
            countString[char] =1
        }
        
    }
    return countString
}

// console.log(stringCountTest('hello'))
//write a function that tells you if the words are anagram of each other
// ex: racecar and car race is anagram or abc , cab are anagrams
function anagramsTest(str,str2) {

    if(str.length!==str2.length){
        return false
    }
    let frequencyCounter1={}
    let frequenceycounter2={}
    for (const char of str) {
        if (frequencyCounter1[char]) {
            frequencyCounter1[char] +=1
        } else {
            frequencyCounter1[char]=1
        }
        
    }

    for (const char of str) {
        if (frequenceycounter2[char]) {
            frequenceycounter2[char] +=1
        } else {
            frequenceycounter2[char]=1
        }
        
    }
   for (const string in frequencyCounter1) {
    if (!(string in frequenceycounter2)) {
       return false
              // can't find letter or letter is zero then it's not an anagram

    }if (frequenceycounter2[string] != frequencyCounter1[string]) {
        return false
    }
   }
   return true
}

console.log(anagramsTest('carrace','racecar'))