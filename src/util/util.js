export const API = "http://localhost:5000"

export const loadData = () =>{

    return new Promise((resolve,reject)=>{
        fetch(API + "/todos")
          .then((res)=> res.json())
          .then((data) => {resolve(data)})
          .catch((err)=> {reject(err)})
      })
  }
