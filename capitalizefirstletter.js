const capitalizeFirstCharacter=(title)=>{
    arr = title.split(' ')
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].substring(1)
    
   }
   const str2 = arr.join(' ')
   return str2
   // console.log(arr)
}

// let string1= title[0].toUpperCase()
// let string2= title.substring(1)
// return string1.concat(string2)
console.log(capitalizeFirstCharacter('apex is cool'))


// const capitalizeFirstCharacter=(title)=>{
//     let str = title.split(' ')
//     for (let i = 0; i < str.length; i++) {
//      str[i] = str[i].chartAt(0).toUpperCase() + str[i].slice(1)
//     }
//    let str2= str.join(' ')
//    return str2
//  }

