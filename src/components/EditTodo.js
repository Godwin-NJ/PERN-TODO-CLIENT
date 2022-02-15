import React, { Fragment,useState } from 'react'

const EditTodo = ({todo}) => {
    // console.log(todo)
    const[description,setDescription] = useState(todo.description)

    const updateTodo = async(e) => {
        e.preventDefault()
        const body = {description}
        const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const data = await response.json()
        window.location = '/'
        console.log(data)

    }


  return (
    <Fragment onClick={()=>setDescription(todo.description)}>
        {/* <!-- Button trigger modal --> */}
        <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${todo.todo_id}`}
        >
            Edit Todo
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" 
                        className="btn-close" data-bs-dismiss="modal" 
                        aria-label="Close" 
                        onClick={()=>setDescription(todo.description)}></button>
            </div>
            <div className="modal-body" >
                <input type="text" 
                       className='form-control' 
                       onChange={(e) => setDescription(e.target.value)} 
                       value={description}
                />
            </div>
            <div className="modal-footer">
                <button type="button" 
                        className="btn btn-warning" 
                        data-bs-dismiss="modal" 
                        onClick={()=>setDescription(todo.description)}
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary" onClick={(e)=> updateTodo(e)}>Save changes</button>
            </div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default EditTodo