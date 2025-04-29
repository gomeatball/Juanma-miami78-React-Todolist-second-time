import React from "react";


const ToDoBody = ({tasks,setTasks}) => {
 
let renderTasks = tasks.map((taskItem) => {
   return (   <li className="todo-task" key={taskItem.id}>
            <h4>{taskItem.task}</h4>
            <button onClick={() => deleteTasks(taskItem.id)}>x</button>
        </li>
   )
  });
// return tasks.map((id,task) => {
//     <li key="id">{task}</li>
// })

let deleteTasks = (idToDelete) => {
 let newArray = tasks.filter((taskitem) => taskitem.id !== idToDelete);
 setTasks(newArray);
};

    return (
        <>
        <section className="main">
           <ul className="todo-tasks">
               {tasks.length !== 0 ? renderTasks : <li>No tasks, add a task</li>}
               
           </ul>
        </section>
        </>
    )
}

export default ToDoBody;