const User = require('./../models/UserModel')


class UserController{
    constructor(){

    }

    async userRegistration(userData){
        console.log(userData)

        let userReg = new Promise(async(resolve,reject)=>{
           try {
            
            let UserData = new User(userData)
            let UserRegResponse = await UserData.save();
               console.log(UserRegResponse)
               resolve({
                   status : 200 ,
                   data : UserRegResponse,
                   message : "User Successfully Registered..!"
               })
           } catch ( err ){
                console.log(err)
                reject({
                    status : 409 ,
                    message : "Unable to save data to the Db" 
                })
           }

        })
        return userReg
    }


}

module.exports = new UserController()