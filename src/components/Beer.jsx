import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Beer;
