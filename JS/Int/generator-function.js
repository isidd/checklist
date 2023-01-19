/* 
    Generator is a special type of function which will return a ittrator 
    and itterator has 2 values {done:state,value:val}
    it pauses it's execution until the we call next 
*/

(()=>{

    let itteraor = [1,2,3,4,5]

    let i = itteraor[Symbol.iterator]() // this gives 2 values ==> {done:state,value:val}
    console.log(i.next())
    console.log(i.next())
    console.log(i.next())
    console.log(i.next())
    console.log(i.next())
    console.log(i.next())


    function* generator (){
        yield 1 ;
        yield *two()
        yield 3 ;
    }

    function* two(){
        yield 2
    }

    let gi = generator()
    console.log(gi.next())
    console.log(gi.next())
    console.log(gi.next())


    function* infiniteGenerator(){
        let i= 0 ;
        while(true){
            console.log(i)
            yield i ;
            i++ ;
        }
    }

    let infi = infiniteGenerator()
    console.log(infi.next())

})()