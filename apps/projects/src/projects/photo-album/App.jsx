// @ts-nocheck
import { useEffect, useState } from 'react'

import DetailedPhoto from './components/DetailedPhoto'
import PhotoList from './components/PhotoList'
import Searchbar from './components/Searchbar'

import './index.css'

import axios from 'axios'

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [photos, setPhotos] = useState([])
  const [detailedPhoto, setDetailedPhoto] = useState(null)
  const [activateSearch, setActivateSearch] = useState(false)

  const fetchData = async ({ query, category }) => {
    console.log('query ', query)
    console.log('category ', category)
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    if (query || category) {
      let searchQuery = query

      if (query && category) {
        searchQuery = `${query} ${category}`
      } else if (category) {
        searchQuery = category
      }

      const response = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: apiKey,
          query: searchQuery
        }
      })

      console.log(response)

      setPhotos(response.data)
      return
    }

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 10
      }
    })

    setPhotos(response.data)
  }

  useEffect(() => {
    fetchData(query, category)
  }, [query, category])

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, category })
      setActivateSearch(false)
    }
  }, [activateSearch])

  return (
    <div className="container">
      <Searchbar
        setQuery={setQuery}
        setCategory={setCategory}
        setActivateSearch={setActivateSearch}
      />
      <PhotoList photos={photos} setDetailedPhoto={setDetailedPhoto} />
      {detailedPhoto && <DetailedPhoto photo={detailedPhoto} setDetailedPhoto={setDetailedPhoto} />}
    </div>
  )
}

export default App
