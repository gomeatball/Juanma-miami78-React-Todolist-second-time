import React from "react";

//include images into your bundle
import ToDoBody from "./ToDoBody";
import ToDoHeader from "./ToDoHeader";
import ToDoFooter from "./ToDoFooter";
import { useState } from "react";



//create your first component
const Home = () => {

	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			console.log(response);
			if (!response.ok){
				throw Error(response.status)
				
			}
				return response.json();
			
			
		})
		.then(data => console.log(data))
		.catch(error => console.error(error, "There was an error with the fetch!"))


	const [tasks, setTasks] = useState([]);
	return (
  <>
   <div className="todoList">
      <h1 className="title">Todos</h1>
	  <div className="header">
	     <ToDoHeader tasks={tasks}
		 setTasks={setTasks}/>
	  </div>
	  <div className="body">
		<ToDoBody tasks={tasks}
		setTasks={setTasks}/>
	  </div>
	  <div className="footer">
	    <ToDoFooter tasks={tasks}
		setTasks={setTasks}/>
	  </div>
   </div>	
  </>
	)
}

export default Home;