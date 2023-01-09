// create a javascript solution to manager a parking lot. implement the parkinglot class that manages a parking lot with a number of slots or spaces. the class has the following constructor and methods.
// the constructor parkinglot(slots) where parameter slots is the size of the parking lot. slots are numbered consecutively from 1 to slots, [1,2,3,...slots]

// the method park(carId) - Parks the car with the given carid at the unoccupied slot with the lowestnumber and returns true.if all slots are occupied, the car is not parked and it returns false

// the method getSlots() Returns an array of all the parking slots where the ith element is the id of the car parked there, or null if the slot is unoccupied. 

// the method remove(carId) Frees the parking slot where the car is parked and returns true. it returns false if a car with the given carID is not found

// The locked stub code validates the correctness of the parkingLot class implementation by performing the following operations:

// park CarID: if the return value of the call is true, it prints "parking started: <carID>". otherwise, it prints "Parking Full:" <carID>
// remove CarID: if the return value is true, it prints 'Car id <carID> Removed from parking'. otherwise, it prints 'Car: <carId> not found"

// GetSlots: for an occupied slot, it prints "Parked at slot <slotNumber": <carID>'. for an unoccupied slot, it prints "Slot <slotNumber> is empty"

// CONSTRAINTS:

// The maximum number of method calls is 15
// at any time, no two parked cars have the same carID

class ParkingLot {
    // Add the methods here
     slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null) {
        this.slots[i] = carId;
        return true;
      }
    }
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === carId) {
        this.slots[i] = null;
        return true;
      }
    }
  }

  getSlots() {
    console.log(`Parking slots: ${this.slots}`);
    return this.slots;
  }

  getSize() {
    console.log(`Parking size is: ${this.slots.length}`);
    return this.slots.length;
  }

  getAvailable() {
    const availableSlots = this.slots.filter((s) => s === null).length;
    console.log(`Available parking slots: ${availableSlots}`);
    return availableSlots;
  }

  isFull() {
    return this.getAvailable() === 0;
  }
}




class ParkingLot {
    constructor(slots) {
      this.slots = new Array(slots).fill(null);
    }
  
    park(carId) {
      const index = this.slots.indexOf(null);
      if (index !== -1) {
        this.slots[index] = carId;
        return true;
      }
      return false;
    }
  
    getSlots() {
      return this.slots;
    }
  
    remove(carId) {
      const index = this.slots.indexOf(carId);
      if (index !== -1) {
        this.slots[index] = null;
        return true;
      }
      return false;
    }
  }








//TEST 2
// The goal of this problem is to use prototypal inheritance in javascript.
// Implement inheritance as described below

// Create a function Employee that takes a single parameter and assigns it to member variable ‘title’.
// Add the following functions to the Employee prototype	
// 1)SetTitle- this function take a single parameter and assigns it to the title member variable.
//  2) getTtitle - this function returns the member variable title

// Create a function Engineer that - 
// 1) inherits from parent employee 
//  2) takes 2 parameters - title(String) and isManager(boolean) and assigns it to the member variable isManager
// add these functions to Engineer's Existing prototype -
// 1)setIsManager - this functino take a single parameter and assigns it to the member variable isManager
// 2) getIsManager - this function returns the member variable isManager

// Sample Output
// Initial Employee Profile - Title is Developer. Is not a Manager
// Final Employee Profile - Title is Developer4. Is a Manager
// Engineer.prototype has property setTitle: false
// Engineer.prototype has property getTitle: false
// Engineer.prototype has property setIsManager: true
// Engineer.prototype has property getIsManager: true
function Employee(title) {
    this.title = title;
  }
  
  Employee.prototype.setTitle = function(title) {
    this.title = title;
  }
  
  Employee.prototype.getTitle = function() {
    return this.title;
  }
  
  function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
  }
  
  Engineer.prototype = Object.create(Employee.prototype);
  
  Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
  }
  
  Engineer.prototype.getIsManager = function() {
    return this.isManager;
  }
  let engineer = new Engineer("Software Engineer", true);
console.log(engineer.getTitle()); // "Software Engineer"
console.log(engineer.getIsManager()); // true
engineer.setTitle("Senior Software Engineer");
console.log(engineer.getTitle()); // "Senior Software Engineer"
engineer.setIsManager(false);
console.log(engineer.getIsManager()); // false