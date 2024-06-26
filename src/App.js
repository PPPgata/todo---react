
import './App.css';
import TodoHeader from './components/TodoHeader';
import FormControl from './components/FormControl';
import TodoLista from './components/TodoLista';

function App() {

  return (
    <div className="App">
      <TodoHeader/>
      <FormControl/>
      <TodoLista/>

      {/* <div className='todo-lista'>
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
      </div> */}
    </div>
  );
}

export default App;
