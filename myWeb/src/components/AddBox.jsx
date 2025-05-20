import "./AddBox.css";
import { useRef } from "react";

const AddBox = ({ onChange }) => {
  return (
    <div className="content">
      <section className="addTaskBox">
        <input id="inputBox" type="text" placeholder="Type task here..." />
        <button className="addButton" onClick={onChange}>
          Add
        </button>
      </section>
    </div>
  );
};

export default AddBox;
