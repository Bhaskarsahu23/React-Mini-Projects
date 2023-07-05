import { useState } from 'react';
import './index.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddIems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(items);
  }

  function hangleDelecteAllItems() {
    const confirmed = window.confirm(
      'Are you sure you wnat to delete all tiems'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddIems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAll={hangleDelecteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
