import React from 'react';

const Todo = (props) => {
    const {todo,RemovebyId}=props
    

    return (
        <div className='todo'>
            <span>{todo.name}</span><button onClick={()=>RemovebyId(todo.id)}><i   className='fa-solid fa-xmark'></i></button> 
        </div>
    );
}

export default Todo;
