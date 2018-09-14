import React from 'react';
import { Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        .header {
          text-align: center;
          color: #6b5404;
        }
        .link {
          text-align: right;
        }
        `}</style>
      <div className="header">
        <h1>Tap Room Brewery</h1>
      </div>
      <div className="link">
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
