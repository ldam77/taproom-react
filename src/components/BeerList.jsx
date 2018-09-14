import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';



function BeerList(props) {
  return(
    <div>
      {Object.keys(props.beerList).map(function(beerId) {
        let beer = props.beerList[beerId];
        return <Beer name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          key={beerId} />
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object
}
export default BeerList;
