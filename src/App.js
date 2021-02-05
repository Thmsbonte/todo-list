import "./App.scss";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faTrashAlt);

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      {tasks.map((elem, index) => {
        return (
          elem[1] === false && (
            <Task task={elem} index={index} tasks={tasks} setTasks={setTasks} />
          )
        );
      })}
      {tasks.map((elem, index) => {
        return (
          elem[1] === true && (
            <Task task={elem} index={index} tasks={tasks} setTasks={setTasks} />
          )
        );
      })}
      <NewTask tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
};

export default App;
