import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Item from '../src/components/item/Item'
import { useState } from 'react'

// title
// births
// deaths
// killed
const test = 
[
  {
    title: 'rabbits',
    births: 50,
    deaths: 10
  },
  {
    title: 'foxes',
    births: 30,
    deaths: 120
  }
]


export default function Home() {
  const [animals, setAnimals] = useState([]);
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={2}>
        <Grid item>
          {
            test.map(item => {
              return <Item data={item} otherAnimals={test}/>
            })
          }
        </Grid>
      </Grid>
    </div>
  )
}
