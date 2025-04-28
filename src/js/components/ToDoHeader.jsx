import React from "react";
import { useState } from "react";
import ToDoBody from "./ToDoBody";

const ToDoHeader = ({list,setList}) => {
    const [inputValue, setInputValue] = useState("");

    const [counter, setCounter] = useState(0);
    const handleAddList = () => {
        if (inputValue === "") {
            setList([...list], inputValue);
            setInputValue("");
        }
    }

    const handleKeyDown = (e) =>{
        if (e.key === "Enter"){
        handleAddList();

    }


    };
    return (
        <>
        <input 
        className="" 
        placeholder="What need to be done?" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}>

        </input>

        <ToDoBody/>
       </>
    )
    
}

export default ToDoHeader;