import React from 'react';
import { Link } from 'react-router-dom';
import './Exercise.css';

const Exercise = (props) => {
  return (
    <Link to={`/user/exercise-details/${props.data._id}`}>
      <article className='my-exercise'>
        <img src={props.data.imageUrl} alt='exercise' />
        <div>
          <h2>{props.data.title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default Exercise;
