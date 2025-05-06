import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
    //state to add new task
  const [newTask, setNewTask] = useState({}); //empty object

  //event handler to handle user input fields
  const handleChange = ({ target }) => {
    //value is the crrent text user has typed
    const { name, value } = target;  //name is the name attribute of the input
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value })); //the value stored in the name variable as the key.
  };

  //state to updates the task list
  const [allTasks, setAllTasks] = useState([]);

  //event handler to submit new task
  const handleSubmit = (event) => {
    event.preventDefault(); //reload page
    if (!newTask.title) return;  //if there is no task, exits early
    setAllTasks((prev) => [newTask, ...prev]); //if there's task to submit, add new task into previous tasks
    setNewTask({});  //this is used to clear the input fields after submission.
  };

  //event handler to delete task
  const handleDelete = (taskIdToRemove) => { //id is required to delete task
    setAllTasks((prev) => prev.filter(  //filter method used to create new array after removing a task
        //task.id is from handleChange event handler
      (task) => task.id !== taskIdToRemove //new array includes only tasks whose id is not equal to the one user wants to remove.
    ));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* to display all tasks with ul tag */}
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
