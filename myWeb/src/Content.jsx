import "./Content.css";

const Content = () => {
  const tasks = [];
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

  return (
    <div className="content">
      <section className="addTaskBox">
        <input
          className="inputBox"
          type="text"
          placeholder="Type task here..."
        />
        <button
          className="addButton"
          onClick={handleAddTask}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
        >
          Add
        </button>
      </section>
      <section className="taskListBox">
        <ul className="taskList">{tasks[0]}</ul>
      </section>
    </div>
  );
};

export default Content;
