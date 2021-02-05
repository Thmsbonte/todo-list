import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, index, tasks, setTasks }) => {
  const handleOnClick = () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="Task">
      <input
        type="checkbox"
        checked={tasks[index][1]}
        onClick={() => {
          const newTasks = [...tasks];
          newTasks[index][1] = !tasks[index][1];
          setTasks(newTasks);
        }}
      />
      <p
        style={
          tasks[index][1]
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {task}
      </p>
      <span>
        <FontAwesomeIcon icon="trash-alt" onClick={handleOnClick} />
      </span>
    </div>
  );
};

export default Task;
