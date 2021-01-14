import Shop from "./components/Shop";

function App(props) {
  const itemList = props.items.map(item => (
    <Shop 
      id={item.id} 
      name={item.name} 
      completed={item.completed}
      key={item.id} 
    />
  ));
  
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
      >
        {itemList}
      </ul>
    </div>
  );
}

export default App;
