import React from 'react';
import data from './data';

const App = () => {
    const[count, setCount] = React.useState(0)
	const[text, setText] = React.useState([])
	const submitHandler = (e) =>{
		e.preventDefault();
		let amount = parseInt(count);
		if(amount == 0 || !amount){
			alert("Please enter the amount!");
		}
		setText(data.slice(0, amount));
	}

   return (
    <section className="section-center">
      <h3>generate boring text</h3>
	  <form className="lorem-form" onSubmit={submitHandler}>
		  <label htmlFor="amount">
			  paragraphs:
		  </label>
		  <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)}/>
		  <button className="btn" type="submit">generate</button>
	  </form>
	  <article className="lorem-text">
		{
			text.map((textItem) =>{
				return <p>{textItem}</p>
			})
		}
	  </article>
    </section>
  )
};


export default App