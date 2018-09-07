import React from 'react';
import { Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        .header {
          font-size: 100px;
          text-align: center;
          color: #e2dad5;
        }
        `}</style>
      <div className="header">
        <h1>Tap Room</h1>
      </div>
      <Link to="/">Home</Link> | <Link to="/newbeer">Add New Beer</Link>
    </div>
  );
}

export default Header;
