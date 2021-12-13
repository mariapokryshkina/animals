import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const AnimalsSingle = () => {
    let {animal} = useParams();
    let history = useHistory();
    return (
        <div className='animalSingleWrapper'>
        <div className='animalSingle'>
        
           <p> This is the page for {animal}{" "}</p>
        
     <img src={'https://source.unsplash.com/1600x900/?' + animal} alt={animal}></img>
        <button onClick={() => history.goBack()}>Back to animals</button>

        </div>
        </div>
          
    );
};

export default AnimalsSingle;