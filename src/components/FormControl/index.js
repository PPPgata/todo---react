import { useState } from "react"
import { API } from "../../util/util.js"

const FormControl = ()=>{
    

    const [input,setInput] = useState({title:"",time:""})

    const handleSubmit = async (e)=>{
    
        e.preventDefault()
    
        const todo = {
          id: Math.random,
          title:input.title,
          time:input.time,
          done: false,
        }
        
        try {
            const req = await fetch(API + "/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers:{
              "Content-Type":"application/json",
            },
          })
    
          console.log(req)
        } catch (error) {
          console.log(error)
        }
    
    
        //envio para api
    
        setInput({title:"",time:""})
        window.location.reload()
      }

    return(


        <div className='todo-form'>
        <h2>insira sua proxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>o que voce vai fazer</label>
            <input
              type="text"
              name='title'
              placeholder='titulo da tarefa'
              onChange={(e) => setInput((prev)=>({...prev,title: e.target.value}))}
              value={input.title}
              required
            />
          </div>
          <div className='form-control'>
            <label htmlFor='time'>o que voce vai fazer</label>
            <input
              type="text"
              name='time'
              placeholder='tempo estimado da tarefa'
              onChange={(e) => setInput((prev)=>({...prev,time: e.target.value}))}
              value={input.time}
              required
            />
          </div>
          
          <input type='submit' className='Enviar'/>
        </form>
      </div>
    )
}

export default FormControl