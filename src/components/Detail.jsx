import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
function Detail() {
  const [image, setImage] = useState(null);
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const API_KEY = 'hH3vVcrK6s-vKT45I2Cl1jlXJUioDnOAd9URP78IIGc';
  useEffect(() => {
    fetchImageDetails();
  }, [id]);

  const fetchImageDetails = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`);
      const data = await response.json();
    
      setImage(data);
    } catch (error) {
      console.error('Error fetching image details:', error);
    }
  };

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1 className="heading">&lt;DETAIL FOR - <span id="image_id">{image.alt_description
      }</span> /&gt;</h1>
      
      <div className="container detail" id="detail-container">
        <img id="detail_image" src={image.links.download} alt="Primary"/>
        
        <div className="content">
          <h1 className="description" id="description_text"></h1>
          <br />
          <h3>Uploaded by - @<span id="username">{image.user.username}</span></h3>
          <br />
          <h4>Date -{image.created_at} <span id="upload_date"></span></h4>
          <br />
          <h5><span id="like_count"></span> Likes:{image.likes}(<span id="view_count"></span > Views: {image.views})</h5>
          <br />
          <hr />
          <br />
          <h1 className="description" id="alt_description"></h1>
          <br />
          <br />
          <br />
          <h5>Base Color:{image.color}</h5>
          <br />
          <div className="image_color" id="image_color" style={{ backgroundColor: image.color }}>
          <span id="color_text" style={{ backgroundColor: image.color }}>{image.color}</span>
          </div>
          <br />
          <br />
          <a
            target="_blank"
            id="download_link"
            className="button"
            href={image.urls.full}
            download
          >
            &lt;DOWNLOAD /&gt;
          </a>
        </div>
      </div>
    </section>
  );
}

export default Detail;
