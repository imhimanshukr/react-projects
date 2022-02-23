import React from 'react';
import data from './data';
import Question from './Question';
const App = () => {
  return (
    <main>
      <div className="container">
          <h3>Q/A</h3>
          <section className="info">
            {
              data.map((data) =>{
                return <Question key={data.id} {...data}/>
              })
            }
          </section>
      </div>
    </main>
  )
}

export default App;