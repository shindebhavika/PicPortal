import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
const App = () => {
  const API_KEY = 'hH3vVcrK6s-vKT45I2Cl1jlXJUioDnOAd9URP78IIGc';
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async (query = '') => {
    const perPage = 30; // Number of photos per page
    const endpoint = query 
      ? `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${API_KEY}`
      : `https://api.unsplash.com/photos?per_page=${perPage}&client_id=${API_KEY}`;
    
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setPhotos(query ? data.results : data);
    } catch (error) {
      console.error('Error fetching data from Unsplash:', error);
    }
  };
  

  const handleSearch = (query) => {
    fetchPhotos(query);
  };

  return (
  
      <div>
      
        <Routes>
          <Route path="/" element={<Home photos={photos}  onSearch={handleSearch}/>} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer></Footer>
      </div>

  );
}

export default App;
