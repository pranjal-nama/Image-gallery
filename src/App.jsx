import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/header/header';
import ImageGrid from './components/imageGrid/imageGrid'
import { fetchImages } from './api';

function App() {

  const [searchQuery, setSearchQuery] = useState('nature');
  const [images, setImages] = useState([]);

  const fetchImagesFromAPI = async (query) => {
    try {
      const data = await fetchImages(query);
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchImagesFromAPI(searchQuery);
    }
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
