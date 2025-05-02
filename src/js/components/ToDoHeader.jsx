import React from "react";
import { useState } from "react";
import ToDoBody from "./ToDoBody";

const ToDoHeader = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  // const [counter, setCounter] = useState(0);

  const validateInput = () => {
    if (!inputValue || inputValue === "" || inputValue === "undefined") {
      alert("please add a task");
    } else {
      handleAddList();
    }
  };

  const handleAddList = () => {
    // if (inputValue.trim === "") {
    //     setTasks([...tasks], inputValue);
    //     setInputValue("");
    // }
    console.log("creat new inputValue: ", inputValue);

    let newInputValueObj = {
      label: inputValue,
      is_done: false,
    };

    // const appendedArray = [...tasks, newInputValueObj];
    // setTasks(appendedArray);

    // setCounter(counter+1);

    setInputValue("");
    // console.log("Current list of tasks: ", appendedArray);
    //step 4. create a new function to fetch a POST
    postNewTask(newInputValueObj);
  };

  const postNewTask = async (newInputValueObj) => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/todos/YuanMa",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInputValueObj),
      }
    );
    if (response.ok) {
      const data = await response.json();
      fetchData();
      // setTasks(data.todos);
      return data;
    } else {
      console.log("Error: ", response.status, response.statusText);
      fetchData();
      return {
        error: {
          status: response.status,
          statusText: response.statusText,
        },
      };
    }
  };
  function fetchData() {
    fetch("https://playground.4geeks.com/todo/users/YuanMa")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.todos);
        setTasks(data.todos);
      })
      .catch((error) => {
        console.log("Looks like there is a proble: ", error);
      });
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
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button className="add-task" onClick={validateInput}>
        Add
      </button>
    </>
  );
};

export default ToDoHeader;
