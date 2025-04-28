import React from "react";

//include images into your bundle
import ToDoBody from "./ToDoBody";
import ToDoHeader from "./ToDoHeader";
import ToDoFooter from "./ToDoFooter";
import { useState } from "react";



//create your first component
const Home = () => {

	const [list, setList] = useState([]);
	return (
  <>
  <h1>Todos</h1>
	 <div>
	     <ToDoHeader list={list}
		 setList={setList}/>
	 </div>
	 <div>
		<ToDoBody list={list}
		setList={setList}/>
	 </div>
	 <div>
	    <ToDoFooter list={list}
		setList={setList}/>
	 </div>
		
  </>
	)
}

export default Home;