import React,{Fragment,useState} from 'react'


const InputTodo = () => {

    const[description, setDescription] = useState('')

    const submitTodo = async(e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch('http://localhost:5000/todos', {
                method : "POST",
                headers: {"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify(body),
            })

            const data = response.json()
            console.log(data)
            setDescription(data)
            setDescription('')
        } catch (error) {
            console.log(error.message)
        }
    }


  return (
    <Fragment>
        <h1 className='text-center mt-5'>inputTodo</h1>
        <form className='d-flex mt-5' onSubmit={submitTodo}>
            <input 
                type="text" 
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className='btn btn-success'>Add</button>
        </form>
    </Fragment>
  )
}

export default InputTodo