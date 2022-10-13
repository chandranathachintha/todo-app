import './todo-app.css'
function TodoTable({todos,index,handleEdit,handleDelete}){
    return(
        <div>
            <table class="table caption-top">
              <thead>
                <tr>
                <th>S.No</th>
                <th>Todo</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                todos.map((todo,sNo)=>{
                    return(
                        <tr>
                        <td>{sNo+1}</td>
                        <td>{todo}</td>
                        <td>
                            <button className={sNo == index ? "btn btn-primary edit":"btn btn-secondary edit"} onClick={()=>handleEdit(sNo)}>Edit</button>
                            <button className='btn btn-secondary delete' onClick={()=>handleDelete(sNo)}>Delete</button>
                        </td>
                    </tr>
                    )
                })
               }
            </tbody>
            </table>
        </div>
    )
}
export default TodoTable;