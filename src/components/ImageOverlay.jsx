import React from 'react';

const ImageOverlay = ({ images, currentIndex, setCurrentIndex, onClose }) => {
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="image-overlay">
      <button className="close-button" onClick={onClose}>×</button>
      
      <button className="nav-button prev" onClick={handlePrev}>
        &#10094;
      </button>

      <div className="image-container">
        <img src={currentImage.url} alt={currentImage.description} />
        <div className="image-info">
          <p className="image-description">{currentImage.description}</p>
          <span className="image-counter">{currentIndex + 1} / {images.length}</span>
        </div>
      </div>

      <button className="nav-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageOverlay; 