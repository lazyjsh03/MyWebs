import "./App.css";
import Header from "./components/Header";
import AddBox from "./components/AddBox";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const tasks = [];

  const onChange = () => {
    setInput(input);
    if (input !== "") {
      tasks.push(input);
    }
    console.log(tasks);
  };

  return (
    <>
      <Header />
      <AddBox input={input} onChange={onChange} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
