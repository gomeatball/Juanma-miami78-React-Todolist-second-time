import React from "react";


const ToDoFooter = ({tasks,setTasks}) => {
    return (
        <>
     {tasks.length === 1? `${tasks.length} item left `: `${tasks.length} items left`} 
        </>
    )
}

export default ToDoFooter;