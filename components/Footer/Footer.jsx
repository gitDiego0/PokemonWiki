import Image from 'next/image'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/pokeapi.svg" alt="PokeAPI Logo" width={72} height={25} />
        </span>
      </a>
    </footer>
  )
}
