import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, index, tasks, setTasks, checkboxs, setCheckboxs }) => {
  const handleOnClick = () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);

    const newCheckboxs = [...checkboxs];
    newCheckboxs.splice(index, 1);
    setCheckboxs(newCheckboxs);
  };

  return (
    <div className="Task">
      <input
        type="checkbox"
        checked={checkboxs[index]}
        onClick={() => {
          const newCheckboxs = [...checkboxs];
          newCheckboxs[index] = !checkboxs[index];
          setCheckboxs(newCheckboxs);
        }}
      />
      <p
        style={
          checkboxs[index]
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
