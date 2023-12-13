import './App.css'
import Header from './components/header/header';
import ImageGrid from './components/imageGrid/imageGrid'

function App() {
  const images = [
    { url: '/src/assets/1.jpg', alt: 'Image 1' },
    { url: '/src/assets/2.jpg', alt: 'Image 2' },
  ];
  return (
    <div className="app">
      <Header />
      <ImageGrid images={images} />
    </div>
  )
}

export default App
