import { useState } from "react";

const NewTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleOnClick = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
    setNewTask(["", false]);
  };

  return (
    <div className="New-task">
      <form action="submit">
        <input
          type="text"
          name="new-task"
          placeholder="new task"
          value={newTask[0]}
          onChange={(event) => {
            setNewTask([event.target.value, false]);
          }}
        />
        <button onClick={handleOnClick}>Add task</button>
      </form>
    </div>
  );
};

export default NewTask;
