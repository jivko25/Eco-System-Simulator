import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Item from '../src/components/item/Item'
import { useState } from 'react'
import AddItem from '../src/components/add-item-modal/AddItem'
import Chart from '../src/components/chart/Chart'
import Help from '../src/components/help/Help'




// title
// births
// deaths
// killed


export default function Home() {
  const [animals, setAnimals] = useState({});
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [years, setYears] = useState('');
  const [action, setAction] = useState(false);
  const addItem = (title, population = 0) => {
    console.log(typeof Array.from(animals));
    const animal = {
      title,
      population: population,
      births : 0,
      deaths : 0
    }
    const newAnimals = animals;
    newAnimals[title] = animal;
    setAnimals(newAnimals)
  }

  return (
    <div className={styles.wrapper}>
        <Button onClick={() => setOpenAddDialog(true)}>Add</Button>
        <Button onClick={() => {console.log(animals);setAction(old => !old)}}>START</Button>
        <Button onClick={() => setOpenHelp(true)}>Help</Button>
        <TextField
          label="Yeats"
          value={years}
          onChange={(e) => {setYears(e.target.value)}}
        />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {
            Object.keys(animals)?.map(item => {
              return (
              <Item data={animals[item]} otherAnimals={animals} key={animals[item].title} onValuesChange={(value) => setAnimals(value)}/>
              )
            })
          }
        </Grid>
        <Grid item xs={4}>
          <Chart animals={animals} years={years} action={action}/>
        </Grid>
      </Grid>
        <AddItem open={openAddDialog} onClose={() => setOpenAddDialog(false)} onAdd={(title, population) => addItem(title, population)}/>
        <Help open={openHelp} onClose={() => setOpenHelp(false)}/>
    </div>
  )
}
