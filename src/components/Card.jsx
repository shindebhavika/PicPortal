import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, src }) {
  return (
    <div className="item" style={{ backgroundColor: 'rgb(38, 38, 38)' }}>
      <Link to={`/detail?id=${id}`} previewlistener="true">
        <img 
          src={src} 
          alt="Preview"
        
        />
      </Link>
    </div>
  );
}

export default Card;
