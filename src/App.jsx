import { useState, useEffect } from 'react';
import Header from './components/header/header';
import ImageGrid from './components/imageGrid/imageGrid'
import { fetchImages } from './api';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('moon');
  const [images, setImages] = useState([]);

  const fetchImagesFromAPI = async (query) => {
    try {
      if (query.trim() !== '') {
        const data = await fetchImages(query);
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
      fetchImagesFromAPI(searchQuery);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ImageGrid images={images} />
    </div>
  )
}

export default App
