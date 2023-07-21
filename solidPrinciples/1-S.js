/*--> Single Responsibility <--*/
/* One function or class should have only one responsibility or one reason to change
 In this case we have 2 reason to change this class 
  - trackCalories
  - alertUser (by emailing or sending the notification)

  So if we change the way we alert the user then we need to change the class

  ** So we would have a alertUser as a separate function  
*/

class CalorieTracker {
  constructor(maxCalorie) {
    this.maxCalorie = maxCalorie;
    this.currentCalorie = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalorie += caloriesCount;
    if (this.currentCalorie > this.maxCalorie) {
      this.alertUser();
    }
  }

  alertUser() {
    console.log("you have acceded the calories");
  }
}

let myCaloriesTracker = new CalorieTracker(100);
myCaloriesTracker.trackCalories(101);

// =================================== Single responsibility Principle ===========================

function alertUser() {
  console.log("you have acceded the calories for today");
}

class One_S_CalorieTracker {
  constructor(maxCalorie) {
    this.maxCalorie = maxCalorie;
    this.currentCalorie = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalorie += caloriesCount;
    if (this.currentCalorie > this.maxCalorie) {
      alertUser();
    }
  }
}

let myCaloriesTrackerNew = new One_S_CalorieTracker(100);
myCaloriesTrackerNew.trackCalories(100);
