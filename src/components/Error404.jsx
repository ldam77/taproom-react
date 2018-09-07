import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div>
      <h1>The page {props.location.pathname} does not exist!</h1>
      <h3>Would you like to return <Link to='/'>Home</Link>?</h3>
    </div>
  );
}

export default Error404;
