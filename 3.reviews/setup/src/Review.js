import React from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = React.useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (indexNum) =>{
    if(indexNum > people.length-1){
      return 0;
    }
    if(indexNum < 0){
      return people.length-1;
    }
    return indexNum;
  }

  const prevPerson = () =>{
   setIndex((index) =>{
     let newIndex = index-1;
     return checkNumber(newIndex);
   })
  }
  const nextPerson = () =>{
    setIndex((index) =>{
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  // for random person
  const randomPerson = () =>{
      let indexNumber = Math.floor(Math.random() * people.length);
      if(indexNumber == index){
        return indexNumber+1;
      };
      setIndex(checkNumber(indexNumber));
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson}/>
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson}/>
        </button>
      </div>
      <div className="random-btn" onClick={randomPerson}>random review</div>
    </article>
  )
}

export default Review