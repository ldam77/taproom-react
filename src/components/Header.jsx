import React from 'react';

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
    </div>
  );
}

export default Header;
