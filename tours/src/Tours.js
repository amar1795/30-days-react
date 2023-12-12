import React from 'react';
import Tour from './Tour';
import Notours from './Notours';
const Tours = ({ tours, removeTour,fetchTours }) => {
  return (

    <>
    {
      tours.length === 0 ?  <Notours fetchTours={fetchTours}/> :
   ( <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
    
  </section>)
}
    </>
  );
};

export default Tours;
