import './todo-app.css'
import TodoTable from './TodoTable';
import {useState} from 'react';
function TodoManger(){
    const [currentTodo, setCurrentTodo] = useState('');
    const [allTodos, setAllTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(undefined);
    
    const handleInput = (event)=>{
        const prstTodo = event.target.value;
        setCurrentTodo(prstTodo); 
    }
    const handleSubmitBtn =()=>{
       if(editingIndex==undefined){
        setAllTodos([...allTodos,currentTodo]);
        setCurrentTodo('');
       }
       else{
        const newTodos = allTodos.map((todo,index)=>{
            if(index == editingIndex) return currentTodo;
            return todo;
        })
        setAllTodos(newTodos);
        setCurrentTodo('');
        setEditingIndex(undefined);
       }
    }
    const handleEdit=(sNo)=>{
        setEditingIndex(sNo);
        setCurrentTodo(allTodos[sNo])
    }
    const handleDelete = (sNo)=>{
        const rmngTods = allTodos.filter((todo,index)=>index != sNo);
        setAllTodos(rmngTods);
    }
    const handleClearBtn = ()=>{
        setAllTodos([]);
    }
    return(
        <div className='mainContainer'>
            <h1 className="title">Todo Application</h1>
            <center>
                <div className="inputTodo_container">
                <input className='input' value={currentTodo} onChange={handleInput}></input>
                <button className="btn btn-primary suBtn" onClick={handleSubmitBtn}>Submit</button>
                </div>
                <button className="btn btn-link clrBtn" onClick={handleClearBtn}>Clear All Todo's</button>
            </center>
            <div className="todo_table">
                <TodoTable todos={allTodos} 
                            index={editingIndex} 
                            handleEdit={handleEdit} 
                            handleDelete={handleDelete} 
                />
            </div>
        </div>
    )
}
export default TodoManger;