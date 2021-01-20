import { nanoid } from "nanoid";
import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Shop from "./components/Shop";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: item => !item.completed,
  Completed: item => item.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {
  const [filter, setFilter] = useState('All');
  const [items, setItems] = useState(props.items);
  function addItem(name) {
    const newItem = { id: "shop-" + nanoid(), name: name, completed: false };
    setItems([...items, newItem]);
  };

  function toggleItemCompleted(id) {
    const updatedItems = items.map(item => {
      if (id === item.id) {
        return {...item, completed: !item.completed}
      }
      return item;
    });
    setItems(updatedItems);
  }

  function deleteItem(id) {
    const remainingItems = items.filter(item => id !== item.id);
    setItems(remainingItems);
  }

  function editItem(id, newName) {
    const editedItemList = items.map(item => {
      if (id === item.id) {
        //
        return {...item, name: newName}
      }
      return item;
    });
    setItems(editedItemList);
  }

  const itemList = items.filter(FILTER_MAP[filter]).map(item => (
    <Shop
      id={item.id}
      name={item.name}
      completed={item.completed}
      key={item.id}
      toggleItemCompleted={toggleItemCompleted}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  ));
  
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const itemsNoun = itemList.length !== 1 ? 'items' : 'item';
  const headingText = `${itemList.length} ${itemsNoun} remaining`;
  const listHeadingRef = useRef(null);
  const prevItemLength = usePrevious(items.length);

  useEffect(() => {
    if (items.length - prevItemLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [items.length, prevItemLength]);

  return (
    <div className="shopapp stack-large">
      <Form addItem={addItem} />
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
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
