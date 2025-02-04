import React, { useState } from 'react';
import './Gallery.css';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      filename: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
      category: 1,
      downloads: 35,
      alt: 'Biała stokrotka'
    },
    {
      id: 2,
      filename: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
      category: 2,
      downloads: 43,
      alt: 'Kot'
    },
    {
      id: 3,
      filename: 'https://cdn.pixabay.com/photo/2016/11/23/17/24/automobile-1853936_1280.jpg',
      category: 3,
      downloads: 33,
      alt: 'Samochód'
    },
    {
      id: 4,
      filename: 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_1280.jpg',
      category: 1,
      downloads: 28,
      alt: 'Tulipan'
    },
    {
      id: 5,
      filename: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.jpg',
      category: 2,
      downloads: 52,
      alt: 'Kot domowy'
    },
    {
      id: 6,
      filename: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg',
      category: 3,
      downloads: 39,
      alt: 'Samochód sportowy'
    }
  ]);

  const [filters, setFilters] = useState({
    flowers: true,
    animals: true,
    cars: true
  });

  const handleDownload = (photoId) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId 
        ? { ...photo, downloads: photo.downloads + 1 }
        : photo
    ));
  };

  const filteredPhotos = photos.filter(photo => {
    if (photo.category === 1 && filters.flowers) return true;
    if (photo.category === 2 && filters.animals) return true;
    if (photo.category === 3 && filters.cars) return true;
    return false;
  });

  return (
    <div className="gallery-container">
      <h1 className="gallery-header">Kategorie zdjęć</h1>
      
      <div className="switches-container">
        <label className="switch-label">
          <input
            type="checkbox"
            className="switch-input"
            checked={filters.flowers}
            onChange={(e) => setFilters({...filters, flowers: e.target.checked})}
          />
          Kwiaty
        </label>
        
        <label className="switch-label">
          <input
            type="checkbox"
            className="switch-input"
            checked={filters.animals}
            onChange={(e) => setFilters({...filters, animals: e.target.checked})}
          />
          Zwierzęta
        </label>
        
        <label className="switch-label">
          <input
            type="checkbox"
            className="switch-input"
            checked={filters.cars}
            onChange={(e) => setFilters({...filters, cars: e.target.checked})}
          />
          Samochody
        </label>
      </div>

      <div className="photos-grid">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img
              src={photo.filename}
              alt={photo.alt}
              className="photo-image"
            />
            <div className="photo-info">
              <h4 className="download-count">Pobrań: {photo.downloads}</h4>
              <button
                className="download-button"
                onClick={() => handleDownload(photo.id)}
              >
                Pobierz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;