// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//       // Is the number a multiple of 3 and 5?
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//       } else if (i % 3 === 0) {
//         // Is the number a multiple of 3?
//         console.log('fizz');
//       } else if (i % 5 === 0) {
//         console.log('buzz');
//       } else {
//         console.log(i);
//       }
//     }
//   }
//  fizzBuzz(20)

 function plusMinus(arr) {
    num1=0
    num2=0
    num3=0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if( element>0 ){
         num1 +=1
        }
        else if(element <0){
             num2+=1
        }
        else { num3+=1}
        
    }
    return num1 , num2 , num3

 }

 console.log(plusMinus([1,1,0,-1,-1]))