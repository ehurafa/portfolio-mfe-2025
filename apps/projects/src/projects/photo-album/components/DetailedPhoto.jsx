import React from 'react'

const DetailedPhoto = ({ photo, setDetailedPhoto }) => {
  return (
    <div className="detailed-photo-backdrop" onClick={() => setDetailedPhoto(null)}>
      <div className="detailed-photo-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  )
}

export default DetailedPhoto
