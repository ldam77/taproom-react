import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Admin() {
  return(
    <div>
      <Link to="/newbeer"><button type="button">Add A New Beer</button></Link>
    </div>
  );
}

export default Admin;
