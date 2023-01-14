// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// JavascriptFunction Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

// To find their comparison points, you can compare each element of the two triplets and award points accordingly. You can use a for loop to iterate through the elements of the triplets, and use if-else statements to check the values and award points. The function should return an array with Alice's score in the first position and Bob's score in the second.

// Here is an example implementation in JavaScript:

// Copy code
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}
// This function takes in the two triplets a and b, and initializes two variables alice and bob to keep track of the scores. 
//It then uses a for loop to iterate through the elements of the triplets, and uses if-else statements to check the values and award points. If a[i] > b[i], alice is awarded a point, if a[i] < b[i], bob is awarded a point. If a[i] = b[i], no one is awarded a point. Finally, the function returns an array with Alice's score in the first position and Bob's score in the second.



// why b[i] increases if we are not iterating?
// In the example implementation I provided, the variable bob is incremented by 1 if the condition a[i] < b[i] is true.
// The variable b[i] is being used in the comparison as the value of the element in the b triplet at the current index of the for loop. 
//The for loop iterates through the elements of a and compares each element to the corresponding element in b at the same index.
// So for each iteration of the for loop, a[i] and b[i] refer to the elements of the a and b triplets at the current index of the for loop. In this way,
// b[i] is incremented because it's being used in the comparison and being incremented if the condition is met.

function plusMinus(arr) {
    let positiveNum=0;
    let negativeNum=0;
    let zeroNum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positiveNum++;
        }else if(arr[i]<0){
            negativeNum++;
        }
        else{zeroNum++}
    }
   let arrayAverage1= positiveNum/arr.length
   let arrayAverage2 = negativeNum/arr.length
   let arrayAverage3= zeroNum/arr.length


    return [arrayAverage1.toFixed(6), arrayAverage2.toFixed(6), arrayAverage3.toFixed(6)]
    }


    console.log(plusMinus([1,1,1,-1,-1,0]))