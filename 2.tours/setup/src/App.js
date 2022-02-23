import React from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
const App = () => {
    const [loading, setLoading] = React.useState(true);
    const [tours, setTours]     = React.useState([])

    const fetchTours = async() =>{
        setLoading(true);
        try{
            let response = await fetch(url);
            const tours  = await response.json();
            setLoading(false);
            setTours(tours);
        }catch(error){
            setLoading(false);
            console.log(error);
        };

    };
    React.useEffect(() =>{
        fetchTours()
    }, [])

    if(loading){
        return(
            <Loading />
        )
    }

    // To Reamove Tour card
    const removeTour = (id) =>{
      const newTours = tours.filter((item) => item.id !== id);
      setTours(newTours);
    };

    // To Refresh Tours
    if(tours.length === 0){
      return<main>
        <div className="title">
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    }

    return (
    <>
        <Tours tours = {tours} removeTour={removeTour} />
    </>
    )
}


export default App;