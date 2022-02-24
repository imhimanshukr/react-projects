import React from 'react';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category) )]

const App = () => {
  const [menuItems, setMenuItems] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  const filterItem = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    let newItem = items.filter((item) => category == item.category );
    setMenuItems(newItem)
  }

  return (
    <menu>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem}  categories = {categories}/>
        <Menu items={menuItems} />

      </section>
    </menu>
  )
}

export default App;