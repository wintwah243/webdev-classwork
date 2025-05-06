import React from "react";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
        {/* use map method to display all tasks */}
      {allTasks.map(({ title, description, id }) => ( //id is required for case : which task user wants to delete
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {/* if user didn't put description, show nothing */}
          {!description ? null : <p>{description}</p>} 
        </li>
      ))}
    </ul>
  );
}
