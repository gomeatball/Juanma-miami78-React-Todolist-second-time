import React, { useEffect } from "react";


const ToDoBody = ({tasks,setTasks}) => {

// create a useEffect to fetch data from the TODO API
// first display it on the console
useEffect(()=> {
   
   
    fetchData();
},[])

// a function to Get a user's todos

function fetchData() {
    fetch('https://playground.4geeks.com/todo/users/YuanMa')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
        .then(data => {
            console.log(data.todos);
            setTasks(data.todos)
        })
        .catch(error => {
            console.log('Looks like there is a proble: ', error)
        })
};


 
let renderTasks = tasks.map((taskItem) => {
   return (   <li className="todo-task" key={taskItem.id}>
            <h4>{taskItem.label}</h4>
            <button onClick={() => deleteTasks(taskItem.id)}>x</button>
        </li>
   )
  });
// return tasks.map((id,task) => {
//     <li key="id">{task}</li>
// })

let deleteTasks = async (idToDelete) => {

    //creat the fetch needed to delete th todo item from the TODO API
 let newArray = tasks.filter((taskitem) => taskitem.id !== idToDelete);
 setTasks(newArray);


//using async await
 const response = await fetch(`https://playground.4geeks.com/todo/todos/${idToDelete}`,{
    method: 'DELETE'
});

if (response.ok) {
    console.log("deletion is succeccful!");
    
    // const data = await response.json();
    // return data;
}else {
    console.log('Error: ', response.status, response.statusText);
    return {
        error: {
            status: response.status,
            statusText: response.statusText
        }
    }
}

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