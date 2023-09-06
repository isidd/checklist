

class ResponseHandler{

    sendResponse(res,outPutData){
        console.log(outPutData)

        if(outPutData.status == '400'){
            return res.status(outPutData.status)
                .json({
                    status : false ,
                    errMessage : outPutData.message        
                })
        }
        
        if(outPutData.status == '200'){
            return res.status(outPutData.status)
                .json({
                    status : true ,
                    message : outPutData.message,
                    data : outPutData.data        
                })
        }
        
        if(outPutData.status == '409'){
                return res.status(outPutData.status)
                .json({
                    status : false ,
                    errMessage : outPutData.message        
                })
        }

    }
}

module.exports = new ResponseHandler()
