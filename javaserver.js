// https://jsonplaceholder.typicode.com/posts

// let asyncss = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//     if(response && response.status!=200){
//         throw new Error('Something wrongs with status code:',response);
//     }
//     let result = await response.json()
//     return result;
// }

let asyncs = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if(response && response.status!=200){
            throw new Error('Something wrongs with status code:',response);
        }
        let result = await response.json()
        return result;
    } catch (e) {
            console.log(`>>> check catch errors: `, e.message)
    }
    
}
asyncs(1000).then(result=> {
    console.log(result)
})
// .catch(err=>{
//     console.log(`>>> check catch errors: `, err.message)
// })

let obj = {a: 1,b: {c:2}}

const {a,b}=obj;
console.log(a,"  ",b)