import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';

function Admin(props) {

  if(props.selectedBeer != null) {
    let beer = props.beerList[props.selectedBeer];
    return(
      <NewBeerForm name={beer.name}
                   brewer={beer.brewer}
                   description={beer.description}
                   abv={beer.abv}
                   price={beer.price}
                   remaining={beer.remaining}
                   beerId={props.selectedBeer}
                   onEditBeer={props.onEditBeer} />
    );
  } else {
    return(
      <div>
        <Link to="/newbeer"><button type="button">Add A New Beer</button></Link>
        <hr/>

        <label>
          <input type="radio" value="false" checked={props.displayLowBeer === false} onChange={()=>{props.onToggleDisplayLowBeer(false)}} />
          Display All
        </label>
        <label>
          <input type="radio" value="true" checked={props.displayLowBeer === true} onChange={()=>{props.onToggleDisplayLowBeer(true)}} />
          Display Low
        </label>

        <BeerList beerList={props.beerList}
                  path={props.path}
                  onSellBeer={props.onSellBeer}
                  onSelectBeer={props.onSelectBeer}
                  onDelete={props.onDelete}
                  displayLowBeer={props.displayLowBeer} />
      </div>
    );
  }
}

Admin.propTypes = {
  beerList: PropTypes.object,
  path: PropTypes.string.isRequired,
  selectedBeer: PropTypes.string,
  onSellBeer: PropTypes.func,
  onSelectBeer: PropTypes.func,
  onEditBeer: PropTypes.func,
  onDelete: PropTypes.func,
  displayLowBeer: PropTypes.bool,
  onToggleDisplayLowBeer: PropTypes.func
}
export default Admin;
