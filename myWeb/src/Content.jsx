import "./Content.css";

const Content = () => {
  const handleAddTask = () => {
    // Logic to add a task
    if (document.querySelector(".inputBox").value !== "") {
      tasks.push({
        id: tasks.length + 1,
        content: document.querySelector(".inputBox").value,
        completed: false,
      });
      console.log(tasks);
      document.querySelector(".inputBox").value = "";
    }
  };
  const tasks = [];

  return (
    <div className="content">
      <section className="addTaskBox">
        <input
          className="inputBox"
          type="text"
          placeholder="Type task here..."
        />
        <button className="addButton" onClick={handleAddTask}>
          Add
        </button>
      </section>
    </div>
  );
};

export default Content;
