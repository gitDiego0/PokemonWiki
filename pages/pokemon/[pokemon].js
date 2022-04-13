

import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import SearchBar from 'components/SearchBar/SearchBar'
import Head from 'next/head'


import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pokemon: 'bulbasaur' } },
      { params: { pokemon: 'ivysaur' } },
      { params: { pokemon: 'venusaur' } },
    ],
    fallback: false,
  }
}

export default function Pokemon({ pokemon }) {
  const { name, id, types, height, weight, abilities, stats, sprites, moves } =
    pokemon
  console.log(pokemon)
  return (
    <main className={styles.main}>
      <p>{name}</p>
      <p>{id}</p>

      <p>{height}</p>
      <p>{weight}</p>
    </main>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
  const pokemon = await res.json()
  console.log(pokemon)
  return {
    props: {
      pokemon: pokemon,
    },
  }
}
