import React from 'react';

const Rating = (props) => {
  let barVal = props.quantity / props.total

  return (
    <div>
      <h4>{props.rating} stars: {barVal}</h4>
    </div>
  );
}

export default Rating;