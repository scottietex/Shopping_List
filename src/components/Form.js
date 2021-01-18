import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name==='') return;
        props.addItem(name);
        setName('');
        alert("Item added!")
      }

    return (
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-shop-input" className="label__lg">
            What do you need to get?
          </label>
        </h2>
        <input
          type="text"
          id="new-shop-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
  }
  
  export default Form;