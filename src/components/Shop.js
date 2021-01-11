import React from "react";
export default function Shop() {
    return (
        <li className="shopstack-small">
          <div className="c-cb">
            <input id="shop-0" type="checkbox" defaultChecked={true} />
            <label className="shop-label" htmlFor="shop-0">
              Item1
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Item1</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Item1</span>
            </button>
          </div>
        </li>
    );
  }