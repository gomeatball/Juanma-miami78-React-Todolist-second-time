import React from "react";
import { useState } from "react";
import ToDoBody from "./ToDoBody";

const ToDoHeader = ({tasks,setTasks}) => {
    const [inputValue, setInputValue] = useState("");

    // const [counter, setCounter] = useState(0);
    

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
        
            label: inputValue
        }


        const appendedArray = [...tasks, newInputValueObj];
        setTasks(appendedArray);

        // setCounter(counter+1);

        setInputValue("");
        // console.log("Current list of tasks: ", appendedArray);
        //step 4. create a new function to fetch a POST
        postNewTask(inputValue);
        
    }

    const postNewTask = async (newInputValueObj) => {
        const response = await fetch('https://playground.4geeks.com/todo/todos/YuanMa',{
           method: "POST",
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(newInputValueObj)
        });
        if (response.ok) {
            const data = await response.json();
            // setTasks(data.todos);
            return data;
         }
         else {
            console.log('Error: ', response.status, response.statusText);
            return {
                error: {
                    status: response.status,
                    statusText: response.statusText
         }
    } 
  }
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