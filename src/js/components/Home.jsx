import React from "react";

//include images into your bundle
import ToDoBody from "./ToDoBody";
import ToDoHeader from "./ToDoHeader";
import ToDoFooter from "./ToDoFooter";



//create your first component
const Home = () => {
	return (
  <>
	 <div>
	     <ToDoHeader/>
	 </div>
	 <div>
		<ToDoBody/>
	 </div>
	 <div>
	    <ToDoFooter/>
	 </div>
		
  </>
	)
}

export default Home;