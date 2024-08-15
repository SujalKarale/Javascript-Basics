async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    })
} 
(async function main(){
    // let a = await sleep()

    let [x,y, ...rest] = [1,5,26,27]
    console.log(x, y, rest)
    //destructuring 
})()// IIFE - IMMIDEATELY INVOKING FUNCTION


// hoisting var a1  movement of declaration to top of the block