function fizzBuzz(n) {
    for(let i=0; i<n; i++)
    {
        if(i%3===0){
            console.log("Fizz")
        }
        else if(i %5===0){
            console.log('Buzz')
        }

    
        else if(i % 3===0 && i %5===0){
            console.log("FizzBuzz") 
        }
        else(console.log(i))
    }
}
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