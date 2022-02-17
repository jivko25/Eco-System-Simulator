import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Item from '../src/components/item/Item'
import { useState } from 'react'
import AddItem from '../src/components/add-item-modal/AddItem'

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
  const [animals, setAnimals] = useState(test);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const addItem = (title) => {
    const animal = {
      title,
      births : 0,
      deaths : 0
    }
    const newAnimals = animals.push(animal)
    setAnimals(newAnimals)
    console.log(animals);
  }
  return (
    <div className={styles.wrapper}>
        <Button onClick={() => setOpenAddDialog(true)}>Add</Button>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {
            test.map(item => {
              return <Item data={item} otherAnimals={test} key={item.title}/>
            })
          }
        </Grid>
      </Grid>
        <AddItem open={openAddDialog} onClose={() => setOpenAddDialog(false)} onAdd={(title) => {addItem(title)}}/>
    </div>
  )
}
