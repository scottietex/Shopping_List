import React from "react";

export default function Shop(props) {
    return (
      <li className="shop stack-small">
        <div className="c-cb">
          <input id="shop-0" type="checkbox" defaultChecked={props.completed} />
          <label className="shop-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
  }