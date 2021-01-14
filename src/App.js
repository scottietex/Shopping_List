import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Shop from "./components/Shop";

function App(props) {
  function addItem(name) {
    alert(name);
  }
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
      <Form addItem={addItem} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 items remaining</h2>
      <ul
        role="list"
        className="shop-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {itemList}
      </ul>
    </div>
  );
}

export default App;
