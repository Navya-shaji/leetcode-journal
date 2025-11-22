/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const result=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },millis)
    })
    return result
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */