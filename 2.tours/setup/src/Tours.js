import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return (
    <>
    <section>
        <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
            <div>
                {
                    tours.map((tourItem) =>{
                        return <Tour key={tourItem.id} {...tourItem} removeTour={removeTour}></Tour>
                    })
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Tours