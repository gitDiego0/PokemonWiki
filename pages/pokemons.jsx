import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import SearchBar from 'components/SearchBar/SearchBar'

import styles from '../styles/Home.module.css'
import Layout from 'components/layout'

export default function Pokemon() {
  const Pokedex = require('pokeapi-js-wrapper')
  const P = new Pokedex.Pokedex()

  const router = useRouter()
  console.log('router', router.query.search)
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    P.getPokemonByName(router.query.search).then((response) => {
      console.log('response', response)
      setPokemon(response)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    P.getPokemonByName(router.query.search).then((response) => {
      console.log('response', response)
      setPokemon(response)
      setLoading(false)
    })
  }, [router.query.search])

  console.log('pokemon', pokemon)

  const {
    name,
    id,
    types,
    height,
    weight,
    abilities,
    stats,
    sprites,
    base_experience,
  } = pokemon || {
    name: 'pikachu',
    id: 25,
    types: [{ type: { name: 'electric' } }],
    height: 10,
    weight: 10,
    abilities: [{ ability: { name: 'static' } }],
    stats: [{ base_stat: 10 }],
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    base_experience: 10,
  }

  const { front_default } = sprites

  if (loading) {
    return (
      <Layout>
        <div className={styles.loading}>
          <Image src="/pokeball.svg" alt="Loading" width={100} height={100} />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SearchBar />
      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <Image src={front_default} width={250} height={250} />
          <h3>{name.toUpperCase()}</h3>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.cell}>ID</div>
            <div className={styles.cell}>{id}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Height</div>
            <div className={styles.cell}>{height}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Weight</div>
            <div className={styles.cell}>{weight}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Abilities</div>
            <div className={styles.cell}>
              {abilities.map((a) => (
                <Link key={a.slot} href={'#'}>
                  <a>{a.ability.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Types</div>
            <div className={styles.cell}>
              {types.map((t) => (
                <Link key={t.slot} href={`/types/12`}>
                  <a>{t.type.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Stats</div>
            <div className={styles.cell}>
              {stats.map((s) => (
                <>
                  {s.stat.name}: {s.base_stat}
                  <br></br>
                  <br></br>
                </>
              ))}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Base Experience</div>
            <div className={styles.cell}>{base_experience}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
