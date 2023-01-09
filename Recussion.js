//is a function that calls itself
//we use this all the time, example, if we console.log inside a function, thats calling itself
// in the drago story  , where the kid asked the dragon if any of the set of numbers are odd, 
// the kid called the same function in a smaller scale. ex: first called: full array, then mid array and so on
//this is also inside JSON.parse /JSON.stringify
//document.getElementById and DOM traversal algorithms
//Object Traversal



function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()



function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}




function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
                                    