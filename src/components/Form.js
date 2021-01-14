import React from "react";

function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
        alert('Item Added!');
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
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
  }
  
  export default Form;