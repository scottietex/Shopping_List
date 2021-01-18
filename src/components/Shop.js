import React from "react";

export default function Shop(props) {
    return (
      <li className="shop stack-small">
        <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleItemCompleted(props.id)}
        />
          <label className="shop-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteItem(props.id)}
            >Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
  }