import React, { useEffect } from 'react'

import Photo from './Photo'

const PhotoList = ({ photos, setDetailedPhoto }) => {
  useEffect(() => {
    console.log('a1', setDetailedPhoto)
  }, [setDetailedPhoto])

  return (
    <div className="album">
      {photos?.map(photo => (
        <Photo key={photo.id} info={photo} setDetailedPhoto={setDetailedPhoto} />
      ))}
    </div>
  )
}

export default PhotoList
