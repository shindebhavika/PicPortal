import React, { useState } from 'react';

function Header({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div>
      <nav>
        <a href="#"><img src="/images/logo.png" alt="logo" id="logo" /></a>
        <form onSubmit={handleSubmit} className="subscribe">
          <input 
            type="text" 
            placeholder="Write here..." 
            name="q" 
            className="subscribe-input" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="submit" value="SEARCH" className="submit-btn" />
        </form>
      </nav>
    </div>
  );
}

export default Header;
