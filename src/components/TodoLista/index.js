import { useState,useEffect } from 'react';
import { BsTrash,BsBookmarkCheck,BsBookmarkCheckFill } from 'react-icons/bs';
import { API,loadData } from '../../util/util';

const TodoLista = ()=>{

    const [todos,setTodos] = useState([])

        useEffect(()=>{
        loadData()
            .then((res)=> setTodos(res))
            .catch((err)=> console.log(err))
      },[])

    const handleDelete = async(id) => {
        fetch(API + "/todos/" + id, {
        method: "DELETE",
      })
      try {
        const data = await loadData()
        setTodos(data)
      } catch (error) {
        console.log(error)
      }
     
    }
    const handleEdit = async(todo) => {
  
        todo.done  = !todo.done;
  
        fetch(API + "/todos/" + todo.id, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
        "Content-Type":"application/json",
        }
      })  
  
  
      try {
        const data = await loadData()
        setTodos(data)
      } catch (error) {
        console.log(error)
      }
      //    setTodos((prevState)=>
      //     prevState.map((t) => (t.id === req.id ? (t = req):req))
      // );  
    }


    return(
        <div className='todo-lista'>
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
        {todos.map((todo, index)=>(
          <div className='todo' key={index}>
            <h3 className={!todo.done ? "no-checked" : "checked"}>{todo.title}</h3>
            <p>Duração: {todo.time}</p>
            <div className='action'>
              <span onClick={()=> handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
              </span>
              <BsTrash onClick={()=> handleDelete(todo.id)}/>    
            </div>
          </div>
        ))}
      </div>
    )
}
export default TodoLista