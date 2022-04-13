import Image from 'next/image'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <Image
            src="/pokeapi.svg"
            alt="Pokeapi Logo"
            width={100}
            height={50}
          />
        </a>
      </div>
    </header>
  )
}
