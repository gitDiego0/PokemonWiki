import { useState, useEffect } from 'react'

const SEARCH_PHRASES = [
  'Ej: Pikachu',
  '¿Que pokemon quieres buscar hoy?',
  'Encuentra tu pokemon favorito',
  'Ej: fuego',
  'Ej: Kanto',
  'Ej: Sinnoh',
]

export default function SearchPlaceholder() {
  const [searchPhrase, setSearchPhrase] = useState(SEARCH_PHRASES[0])

  useEffect(() => {
    setSearchPhrase(
      SEARCH_PHRASES[Math.floor(Math.random() * SEARCH_PHRASES.length)]
    )
  }, [])

  return searchPhrase
}
