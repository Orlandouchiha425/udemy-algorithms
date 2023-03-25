//is a function that calls itself
//we use this all the time, example, if we console.log inside a function, thats calling itself
// in the drago story  , where the kid asked the dragon if any of the set of numbers are odd,
// the kid called the same function in a smaller scale. ex: first called: full array, then mid array and so on
//this is also inside JSON.parse /JSON.stringify
//document.getElementById and DOM traversal algorithms
//Object Traversal

function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Dev Simplified

//non recursive
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hooray");
}

function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

function sumRange(n) {
  let total = 0;

  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeRecursive(n - 1, total + n);
}

sumRangeRecursive(3, 0);
sumRangeRecursive(2, 3);
sumRangeRecursive(1, 5);
sumRangeRecursive(0, 6);
return 6;



function printChildrenRecursive(t) {
    if(t.children.length ===0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    });
}
const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};


