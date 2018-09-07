import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Brewer: {props.brewer}</p>
      <p>Description: {props.description}</p>
      <p>ABV: {props.abv}</p>
      <p>Price: {props.price}</p>
      <p>Pints Remaining: {props.remaining}</p>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
};

export default Beer;
