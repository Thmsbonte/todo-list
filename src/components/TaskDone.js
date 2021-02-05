import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDone = ({
  taskDone,
  index,
  tasksDone,
  setTasksDone,
  tasks,
  setTasks,
}) => {
  const handleOnClick = () => {
    const newTasksDone = [...tasksDone];
    newTasksDone.splice(index, 1);
    setTasksDone(newTasksDone);
  };

  return (
    <div className="Task-done">
      <input
        type="checkbox"
        checked="false"
        onClick={() => {
          const newTasks = [...tasks];
          newTasks.push(taskDone[index]);
          setTasks(newTasks);

          const newTasksDone = [...tasksDone];
          newTasksDone.splice(index, 1);
          setTasksDone(newTasksDone);
        }}
      />
      <p>{taskDone}</p>
      <span>
        <FontAwesomeIcon icon="trash-alt" onClick={handleOnClick} />
      </span>
    </div>
  );
};

export default TaskDone;
