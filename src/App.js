import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackagingList";
import Statistics from "./Statistics";

function App() {
  const [items, setItems] = useState([]);

  function handleAppItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAppItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onChcekd={handleCheckedItems}
        onClearItems={handleClearItems}
      />
      <Statistics items={items} />
    </div>
  );
}

export default App;
