import React, { useState, useEffect } from 'react'

const Quote = ({ text, author }) => {
  const [translate, setTranslate] = useState('')

  async function translateQuote(language) {
    try {
      const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: JSON.stringify({
          q: text,
          source: 'pt',
          target: language
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      const data = await response.json()

      setTranslate(data.translatedText)
    } catch (error) {
      console.log('Erro ao traduzir.')
    }
  }

  useEffect(() => {
    setTranslate('')
  }, [text])

  return (
    <div>
      <blockquote className="bloquote">
        <p>{translate ? translate : text}</p>
        <footer className="bloquote-footer">{author}</footer>
      </blockquote>
      <button className="btn btn-primary mr-1" onClick={() => translateQuote('en')}>
        Traduzir para o inglês
      </button>
      <button className="btn btn-secondary m-1" onClick={() => translateQuote('es')}>
        Traduzir para o espanhol
      </button>
    </div>
  )
}

export default Quote
