import React from "react";
import "./AddForm.css";
function AddForm({ title, setTitle, saveTask, editId }) {
  return (
    <>
      <h2>Todo List App</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "อัพเดต" : "เพิ่ม"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
