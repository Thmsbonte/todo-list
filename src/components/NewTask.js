import { useState } from "react";

const NewTask = ({ tasks, setTasks, checkboxs, setCheckboxs }) => {
  const [newTask, setNewTask] = useState("");

  const handleOnClick = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
    setNewTask("");

    const newCheckboxs = [...checkboxs];
    newCheckboxs.push(false);
    setCheckboxs(newCheckboxs);
  };

  return (
    <div className="New-task">
      <form action="submit">
        <input
          type="text"
          name="new-task"
          placeholder="new task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button onClick={handleOnClick}>Add task</button>
      </form>
    </div>
  );
};

export default NewTask;
