import React, { useState } from "react";

import "./ToDo.css";
import UpdateFormPopup from "../UpdateItemPopup/UpdateItemPopup";
export default function ToDo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (event) => {
    setInput(event?.target?.value);
  };

  const storeItems = (event) => {
    event.preventDefault(); //Page will not refresh after submit
    setItems([...items, input]); // Using Spread operator we can push the value into the array
    setInput("");
  };

  const deleteItem = (key) => {
    setItems(items.filter((data, index) => index !== key)); //Chackong the index and filtering the item and updating the state
  };

  const onEditButton = (index) => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="todo-container">
      <form className="input-section" onSubmit={storeItems}>
        <h1>TODO</h1>
        <input
          type="text"
          placeholder="Enter items..."
          value={input}
          onChange={handleChange}
        />
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <i
              className="fa-solid fa-pencil"
              onClick={() => onEditButton()}
            ></i>
            <i
              className="fa-regular fa-trash-can"
              onClick={() => deleteItem(index)}
            ></i>
          </li>
        ))}
      </ul>

      <UpdateFormPopup isOpen={isEdit} onClose={() => setIsEdit(false)}>
        <h2>This is a modal</h2>
        <p>Some content goes here...</p>
      </UpdateFormPopup>
    </div>
  );
}
