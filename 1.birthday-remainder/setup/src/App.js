import React from 'react';
import data from './data';
import List from './List';

const App = () => {
    const [person, setPerson] = React.useState(data)
  return (
    <main>
        <section className="container">
            <h3>{person.length} birthdays today</h3>
            <List people_data = {person}/>
            <button onClick={() => setPerson([])}>clear all</button>
        </section>
    </main>
  )
}

export default App;