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

  const beerInformation =
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
    <p>Brewer: {props.brewer}</p>
    <p>Description: {props.description}</p>
    <p>
      ABV: <span className={abvStyle}>{props.abv}</span>,
      Price: <span className={priceStyle}>${props.price}</span>,
      Pints Remaining: <span className={remainStyle}>{props.remaining}</span>
    </p>
  </div>;

  if (props.path === '/admin') {
    return (
      <div>
        <h2>{props.name} <button onClick={()=>props.onSelectBeer(props.beerId)}>Edit</button></h2>
        <button type='button' onClick={()=>props.onSellBeer(props.beerId, 1)}>Pint</button>
        <button type='button' onClick={()=>props.onSellBeer(props.beerId, 2)}>Growler</button>
        <button type='button' onClick={()=>props.onSellBeer(props.beerId, 4)}>Large Growler</button>
        {beerInformation}
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.name}</h2>
        {beerInformation}
        <hr/>
      </div>
    );
  }
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  path: PropTypes.string,
  beerId: PropTypes.string,
  onSellBeer: PropTypes.func,
  onSelectBeer: PropTypes.func
};

export default Beer;
