import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

import searchPhrase from '../hooks/searchPlaceholder'

export default function SearchBar() {
  const [inputText, setInputText] = useState('')
  const router = useRouter()

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.length > 0) {
      router.push({
        pathname: `/pokemons`,
        query: { search: inputText },
      })
    }
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarInput}>
          <form onSubmit={handleSubmit}>
            <input
              onChange={inputHandler}
              type="text"
              placeholder={searchPhrase()}
              name="searchBar"
              value={inputText}
            />
            <button>
              <Image
                src="/searchIcon.svg"
                alt="Search Icon"
                width={24}
                height={24}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
