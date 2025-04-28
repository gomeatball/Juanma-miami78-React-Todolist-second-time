import React from "react";
import { useState } from "react";
import ToDoBody from "./ToDoBody";

const ToDoHeader = ({tasks,setTasks}) => {
    const [inputValue, setInputValue] = useState("");

    const [counter, setCounter] = useState(0);
    

    const validateInput = () => {
        if (!inputValue || inputValue === "" || inputValue === "undifined") {
            alert("please add a task")
        }
       else{ handleAddList()}
    }

    const handleAddList = () => {
        // if (inputValue.trim === "") {
        //     setTasks([...tasks], inputValue);
        //     setInputValue("");
        // }
        console.log("creat new inputValue: ", inputValue);
        
        let newInputValueObj = {
            id: counter,
            task: inputValue
        }


        const appendedArray = [...tasks, newInputValueObj];
        setTasks(appendedArray);

        setCounter(counter+1);

        setInputValue("");
        console.log("Current list of tasks: ", appendedArray);
        
    }

    // const handleKeyDown = (e) =>{
    //     if (e.key === "Enter"){
    //     handleAddList();

    // }


   
    return (
        <>
        <input 
        type="text"
        className="new-task" 
        placeholder="What need to be done?" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}>
        </input>
       <button className="add-task" onClick={validateInput}>Add</button>
      

       </>
    )
    
}

export default ToDoHeader;