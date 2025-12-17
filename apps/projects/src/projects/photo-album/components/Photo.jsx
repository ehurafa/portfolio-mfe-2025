import React from 'react'

const Photo = ({ info, setDetailedPhoto }) => {
  return (
    <div className="photo" onClick={() => setDetailedPhoto(info)}>
      <img src={info.urls.small} alt={info.alt_description} />
    </div>
  )
}

export default Photo
