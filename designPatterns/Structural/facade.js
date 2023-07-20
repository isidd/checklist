/*
    Facade design pattern 
        - It is type of pattern where user we don't need to know about the implimentaion complexity
          this is also under the very main concept of Dependance inversion
        - Its a Simplified API to hide other low level details
        Eg : BFF - Backend for frontend Layer
             External facing API    
          
 */


    app.get("/comments/:commentId",(req,res)=>{
        // ============ doing all the things here =================//
        return {
            status : 1,
            data : [comments]
        }
    })
        
    // now user just need to call the endpoint and don't need to understand the complexity of 
    // fetching the comments

    let comments = axios.get(`/comments/${commentId}`)