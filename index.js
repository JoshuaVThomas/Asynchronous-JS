const axios = require('axios')

// asynchronous JS with promises

const getData = axios.get('https://catfact.ninja/fact')
getData.then((data)=>{
      console.log(data.data.fact)
}).catch((err)=>{
      console.log(err);
}).finally(()=>{
      console.log("done")
})

// asynchronous JS with async await 

const fetch = async() => {
      try{
       const getData1 = await axios.get('https://catfact.ninja/fact')
       console.log(getData1.data.fact);
      }catch(err){
            console.log(err);
      }finally{
            console.log("done");
      }
}

fetch()