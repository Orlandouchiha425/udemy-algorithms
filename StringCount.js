//write a problem that takes a string and returns counts of each character in a string
const StringCount =(str) =>{
    // str.toLowerCase()
    //make object to return at the end
 let result = {}
 for (let i = 0; i < str.length; i++) {
        let char=str[i].toLowerCase() //if the char is a number /letter AND is a key in object add one to count
      if(result[char]>0){
        result[char]++
      }else{
        result[char]=1
      }
    
    
 }
 return result
}

// console.log(StringCount('Hhello'))
// // charCount("aaa")//{a:4}
// // charCount("hello") //{h:1, e:1, l:2,o:1}

// //make over to return string

// function charCount(str) {
//     let obj={}
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char]>0){
//                 obj[char]++
//             }else{
//                 obj[char]=1
//             }
//         }
        
//     }
//     return obj
// }


// function charCount1(str) {
//     let obj={}
//     for (let char of str) {
//          char = char.toLowerCase()
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char]>0){
//                 obj[char]++
//             }else{
//                 obj[char]=1
//             }
//         }
        
//     }
//     return obj
// }

// console.log(charCount1('Hhello my name is ORLANDO ! 123'))
console.log(StringCount("hello my name"))