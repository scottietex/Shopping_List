import Shop from "./components/Shop";

function App(props) {
  return (
    <div className="shopapp stack-large">
      <h1>Shopping List</h1>
      <form>
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
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> items</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>remaining</span>
          <span className="visually-hidden"> items</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>collected</span>
          <span className="visually-hidden"> items</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 items remaining
      </h2>
      <ul
        role="list"
        className="shopping-list stack-large stack-exception"
        aria-labelledby="list-heading"
      />
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
        <li className="shop stack-small">
          <div className="c-cb">
            <input id="shop-1" type="checkbox" />
            <label className="shop-label" htmlFor="shop-1">
              Item2
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Item2</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Item2</span>
            </button>
          </div>
        </li>
        <li className="shop stack-small">
          <div className="c-cb">
            <input id="shop-2" type="checkbox" />
            <label className="shop-label" htmlFor="shop-2">
              Item3
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Item3</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Item3</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
