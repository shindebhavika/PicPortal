import React from 'react';
import Card from './Card';
import Header from './Header';

function Home({ photos ,onSearch}) {
  return ( <>
  <Header onSearch={onSearch}></Header>
    <div className="container" id="image-container">
      {photos.length === 0 ? (
        <p>No photos available</p>
      ) : (
        photos.map(photo => (
          <Card key={photo.id} id={photo.id} src={photo.urls.thumb} />
        ))
      )}
    </div>
    </>
  );
}

export default Home;
