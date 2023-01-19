/*--> Single Responsiblity <--*/
/* One function or class should have only one responsiblity or one reason to change
 In this case we have 2 reason to change this class 
  - trackCalories
  - alertUser (by emailing or sending the notification)

  So if we change the way we alert the user then we need to change the class

  ** So we would have a alertUser as a seperate function  
*/   

class CalorieTracker {
    constructor(maxCalorie){
        this.maxCalorie = maxCalorie ; 
        this.currentCalorie = 0 ;
    }

    trackCalories(claorieCount){
        this.currentCalorie += claorieCount ; 
        if(this.currentCalorie > this.maxCalorie){
            this.alertUser()
        }
    }

    alertUser(){
        console.log("you have accedded the calories")
    }
    
}


let myClaoriesTracker = new CalorieTracker(100)
myClaoriesTracker.trackCalories(101)


// =================================== Single responsiblity Principle ===========================

function alertUser (){
    console.log("you have acceded the calories for today")
}

class One_S_CalorieTracker {
    constructor(maxCalorie){
        this.maxCalorie = maxCalorie ; 
        this.currentCalorie = 0 ;
    }

    trackCalories(claorieCount){
        this.currentCalorie += claorieCount ; 
        if(this.currentCalorie > this.maxCalorie){
            alertUser()
        }
    }
}

let myClaoriesTrackerNew = new One_S_CalorieTracker(100)
myClaoriesTrackerNew.trackCalories(100)





