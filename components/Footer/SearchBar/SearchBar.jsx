import { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

const SEARCH_PHRASES = [
  'Ej: Pikachu',
  '¿Que pokemon quieres buscar hoy?',
  'Encuentra tu pokemon favorito',
  'Ej: fuego',
  'Ej: Kanto',
  '¿Donde quieres buscar tu pokemon?',
  'Ej: Sinnoh',
]

export default function SearchBar() {
  const [searchPhrase, setSearchPhrase] = useState(SEARCH_PHRASES[0])

  useEffect(() => {
    setSearchPhrase(
      SEARCH_PHRASES[Math.floor(Math.random() * SEARCH_PHRASES.length)]
    )
  }, [])

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarInput}>
          <input type="text" placeholder={searchPhrase} />
          <button>
            <Image
              src="/searchIcon.svg"
              alt="Search Icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
