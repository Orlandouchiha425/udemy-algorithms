function subString(s){
    let subString=[];
    let total =0
    for(let i=0; i<s.length; i++){
        element = s[i]
        if(element != s[i +1]){
            subString +=element[s]
            
        }
    }
   return [total, subString]
};

console.log(subString('abcceddddddd'))