const router = require('express').Router() ; 
const UserController = require('./../controller/UserController')
const ResponseHandler = require('./../Handler/ResponseHandler')

router.post('/registration',async(req,res)=>{
    console.log("here")

        let {email , firstName , lastName , password } = req.body

        let registrationData = {email , firstName , lastName , password}
        
        let registrationResponse = await UserController.userRegistration(registrationData)

        ResponseHandler.sendResponse(res,registrationResponse)            
        
    })

router.post('/location-info',async(req,res)=>{

    let { country , state , district , zip , address , phoneNumber } = req.body

    let locationData = { country , state , district , zip , address , phoneNumber }
    
    let registrationLocResponse = await UserController.userRegistration(locationData)

    ResponseHandler.sendResponse(res,registrationLocResponse)            
    
})


router.post('/professional-info',async(req,res)=>{

    let { role , intrests , grade } = req.body

    let locationData = { role , intrests , grade }
    
    let registrationProfResponse = await UserController.userRegistration(locationData)

    ResponseHandler.sendResponse(res,registrationProfResponse)            
    
})



router.post('/login',async(req,res)=>{

    let {email , password } = req.body

    let loginData = {email , password}
    
    let loginResponse = await UserController.userRegistration(loginData)

    ResponseHandler.sendResponse(res,loginResponse)            
    
})

router.post('/logout',async(req,res)=>{

    let { userId } = req.userDetails

    let logoutResponse = await UserController.userRegistration(userId)

    ResponseHandler.sendResponse(res,logoutResponse)            
    
})


module.exports = router ; 