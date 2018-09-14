import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {

  let remainStyle = '';
  if (parseInt(props.remaining) < 10) {
    remainStyle = 'low';
  };

  let abvStyle = '';
  if (parseFloat(props.abv.slice(0,-1)) > 6) {
    abvStyle = 'strong';
  };

  let priceStyle = '';
  if (parseInt(props.price) < 5) {
    priceStyle = 'cheap';
  }


  return (
    <div>
      <style jsx>{`
          .low {
            color: red;
          }
          .strong {
            font-weight: bold;
          }
          .cheap {
            color: green;
          }
        `}</style>
      <h2>{props.name}</h2>
      <p>Brewer: {props.brewer}</p>
      <p>Description: {props.description}</p>
      <p>
        ABV: <span className={abvStyle}>{props.abv}</span>,
        Price: <span className={priceStyle}>${props.price}</span>,
        Pints Remaining: <span className={remainStyle}>{props.remaining}</span>
      </p>
      <hr/>
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
