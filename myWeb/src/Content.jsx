import "./Content.css";

const Content = () => {
  const handleAddTask = () => {
    // Logic to add a task
    tasks.push({
      id: tasks.length + 1,
      content: document.querySelector(".inputBox").value,
      completed: false,
    });
    console.log(tasks);
  };
  const tasks = [];
  return (
    <div className="content">
      <section className="addTask">
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
