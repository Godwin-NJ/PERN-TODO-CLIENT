import React, { Fragment,useEffect,useState } from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {
    const [todos,setTodos] = useState([])
    console.log(todos)

    useEffect(() => {
        const allTodo = async() => {
            try {
                const response = await fetch('http://localhost:5000/todos')
                const data = await response.json()
                setTodos(data) 
            } catch (error) {
                console.log(error.message)
            }
        }
        allTodo()
    },[])

    const deletedTodo = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`,{
            method : "DELETE",
            // headers: {"Content-type": "application/json;charset=UTF-8"}
        })
            setTodos(todos.filter((todo)=> todo.todo_id !== id))
        } catch (error) {
            console.log(error.message)
        }
        
    
    }


  return (
    <Fragment>
    <table className="table table-bordered mt-5">
        <thead>
            <tr>
            <th>Firstname</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
             todos.map((todo) => {
                return(
                    <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo={todo} setTodos={setTodos}/></td>
                    <td>
                        <button className='btn btn-danger' onClick={() => deletedTodo(todo.todo_id)}>
                            Delete
                        </button>
                    </td>
                    </tr>
                )
                })
            }
            
        </tbody>
    </table>
    </Fragment>
  )
}

export default ListTodos