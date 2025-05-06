import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) { //props
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New task"
        value={newTask.title || ""} //if it's undefined,it shows an empty string instead 
        onChange={handleChange}
      />
      {!newTask.title ? null : (  //If newTask.title is empty, nothing is shown.
      //if user type task's title in input fields , textarea(for description) and add button will appear
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}