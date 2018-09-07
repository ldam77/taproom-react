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
        .link {
          text-align: right;
        }
        `}</style>
      <div className="header">
        <h1>Tap Room</h1>
      </div>
      <div className="link">
        <Link to="/">Home</Link> | <Link to="/newbeer">Add New Beer</Link>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
