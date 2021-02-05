import "./App.scss";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faTrashAlt,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/SearchBar";
library.add(faTrash, faTrashAlt, faListUl);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <div className="App container">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      {tasks.map((elem, index) => {
        return (
          elem[1] === false &&
          elem[0].includes(search) && (
            <Task task={elem} index={index} tasks={tasks} setTasks={setTasks} />
          )
        );
      })}
      {tasks.map((elem, index) => {
        return (
          elem[1] === true &&
          elem[0].includes(search) && (
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
