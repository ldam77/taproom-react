import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BeerList from './BeerList';

function Admin(props) {
  return(
    <div>
      <Link to="/newbeer"><button type="button">Add A New Beer</button></Link>
      <hr/>
      <BeerList beerList={props.beerList} />
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.object
}
export default Admin;
