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


export default function Home() {
  const [animals, setAnimals] = useState({});
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const addItem = (title) => {
    console.log(typeof Array.from(animals));
    const animal = {
      title,
      births : 0,
      deaths : 0
    }
    console.log(animal);
    const newAnimals = animals;
    newAnimals[title] = animal;
    console.log(newAnimals);
    setAnimals(newAnimals)
  }

  const onValuesChange = (value) => {
    setAnimals(value);
    console.log(animals);
  }
  return (
    <div className={styles.wrapper}>
        <Button onClick={() => setOpenAddDialog(true)}>Add</Button>
        <Button onClick={() => {console.log(animals);}}>START</Button>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {
            Object.keys(animals)?.map(item => {
              return (
              <Item data={animals[item]} otherAnimals={animals} key={animals[item].title} onValuesChange={(value) => {onValuesChange(value)}}/>
              )
            })
          }
        </Grid>
      </Grid>
        <AddItem open={openAddDialog} onClose={() => setOpenAddDialog(false)} onAdd={(title) => {addItem(title)}}/>
    </div>
  )
}
