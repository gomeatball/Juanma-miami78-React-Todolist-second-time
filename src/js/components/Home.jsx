import React from "react";

//include images into your bundle
import ToDoBody from "./ToDoBody";
import ToDoHeader from "./ToDoHeader";
import ToDoFooter from "./ToDoFooter";
import { useState } from "react";
import "../../styles/todoList.css"


//create your first component
const Home = () => {

	const [tasks, setTasks] = useState([]);
	return (
  <>
  <h1>Todos</h1>
	 <div>
	     <ToDoHeader tasks={tasks}
		 setTasks={setTasks}/>
	 </div>
	 <div>
		<ToDoBody tasks={tasks}
		setTasks={setTasks}/>
	 </div>
	 <div>
	    <ToDoFooter tasks={tasks}
		setTasks={setTasks}/>
	 </div>
		
  </>
	)
}

export default Home;