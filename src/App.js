import { nanoid } from "nanoid";
import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Shop from "./components/Shop";

function App(props) {
  const [items, setItems] = useState(props.items);
  function addItem(name) {
    const newItem = { id: "shop-" + nanoid(), name: name, completed: false };
    setItems([...items, newItem]);
  };

  const itemList = items.map(item => (
    <Shop 
      id={item.id} 
      name={item.name} 
      completed={item.completed}
      key={item.id} 
    />
  ));
  
  const itemsNoun = itemList.length !== 1 ? 'items' : 'item';
  const headingText = `${itemList.length} ${itemsNoun} remaining`;

  return (
    <div className="shopapp stack-large">
      <Form addItem={addItem} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
