// There are 26 employees to complete a task. The employees have IDs in the range ['a'-'z'], where employee 0 has ID = 'a', employee 1 has ID = 'b', ... employee 25 has ID = 'z'. The task runs continuously, and the employees take turns to perform the task. At any moment of time, exactly one employee is working on the task. As soon as an employee leaves the task, the following employee starts working on it.

// Given the employee numbers and the times at which they leave the task in a 2-D array leaveTimes, find the ID of the employee who has the longest single time slot at the task.
// leaveTimes[i][0] represent employee numbers, in the range 0-25. leaveTimes[i][1] represents the time at which the employee leaves the task. The elements will be given in ascending time order.
// Note: If the same employee has two continuous slots, the slots are considered to be different.

// Example

// leaveTimes = [[0, 3], [2, 5], [0, 9], [1, 15]]

// In the example, the time slots are as follows:

// Employee 0 works from t=0 to t=3, i.e., for 3 units of time.
// Employee 2 works from t=3 to t=5, i.e for 5-3 = 2 units of time.
// Employee 0 works from t=5 to t=9, i.e for 9-5 = 4 units of time.
// Employee 1 works from t=9 to t=15, i.e., for 15-9 = 6 units of time.
// The largest time slot is of 6 units of time, by employee 1, so return the ID of employee 1, i.e., 'b'.

// Function Description

// Complete the function findLongestSingleSlot in JavaScript in the editor below.

// findLongestSingleSlot has the following parameter(s):
//     int leaveTimes[n][2]: the first column contains the employee number, the second contains the time at which the employee leaves the task.

// Returns:

//     char: the ID of the employee that has the longest single slot.

// Constraints

// 1 ≤ n ≤ 105
// 0 ≤ leaveTimes[i][0] ≤ 25 (0 ≤ i < n)
// 1 ≤ leaveTimes[i][1] ≤ 108 (0 ≤ i < n)
// There will only be one employee having the longest single time slot.
// leaveTimes is sorted in ascending order of leaveTimes[i][1]

// To solve this problem, you could iterate over the leaveTimes array, keeping track of the longest time slot found so far and the employee who had it.

// You could initialize a variable longestSlot to 0 and a variable employeeWithLongestSlot to -1. Then, you could iterate over leaveTimes and, for each element, calculate the time slot of the current employee by subtracting the time they left the task from the time the previous employee left the task. If this time slot is greater than the current value of longestSlot, you could update longestSlot and employeeWithLongestSlot with the current time slot and employee number, respectively.

// After the loop, you could return the character corresponding to the employee number stored in employeeWithLongestSlot, by adding 'a' to it.

// Here is some example code that implements this approach:

// Copy code
function findLongestSingleSlot(leaveTimes) {
  let longestSlot = 0;
  let employeeWithLongestSlot = -1;
  for (let i = 0; i < leaveTimes.length; i++) {
    let employee = leaveTimes[i][0];
    let timeLeft = leaveTimes[i][1];
    let timeSlot;
    if (i === 0) {
      timeSlot = timeLeft;
    } else {
      timeSlot = timeLeft - leaveTimes[i - 1][1];
    }
    if (timeSlot > longestSlot) {
      longestSlot = timeSlot;
      employeeWithLongestSlot = employee;
    }
  }
  return String.fromCharCode(employeeWithLongestSlot + 'a'.charCodeAt(0));
}