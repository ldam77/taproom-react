import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {

  let remainStyle = 'normal';
  if (parseInt(props.remaining) < 10) {
    remainStyle = 'low';
  };

  let abvStyle = 'strong';
  console.log(props.abv.slice(0,-1));
  if (parseInt(props.abv.slice(0,-1)) < 5) {
    abvStyle = 'weak';
  ;

  return (
    <div>
      <style jsx>{`
          .normal {
            color: yellow;
          }
          .low {
            color: red;
          }
          .strong {
            font-weight: bold;
          }
          .weak {
            font-style: italic;
          }
        `}</style>
      <h2>{props.name}</h2>
      <p>Brewer: {props.brewer}</p>
      <p>Description: {props.description}</p>
      <p className={abvStyle}>ABV: {props.abv}</p>
      <p>Price: ${props.price}</p>
      <p className={remainStyle}>Pints Remaining: {props.remaining}</p>
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
