import styles from "./Item.module.scss";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useState } from "react";
import Typography from '@mui/material/Typography'
import AddITem from "../add-item-modal/AddItem";
import Button from '@mui/material/Button'

export default function Item({data, otherAnimals, onValuesChange}){
    const [births, setBirths] = useState(data.births);
    const [deaths, setDeaths] = useState(data.deaths);

    const handleChangeBirths = (value) => {
        setBirths(value);
        otherAnimals[data.title] = {title : data.title, births : value, deaths, population: data.population}
        onValuesChange(otherAnimals);
    }

    function handleChangeDeaths(value){
        setDeaths(value);
        otherAnimals[data.title] = {title : data.title, births, deaths : value, population: data.population}
        onValuesChange(otherAnimals);
    }

    const handleChangeKills = (value, title) => {
        otherAnimals[data.title][title] = value
        onValuesChange(otherAnimals);
    }

    return(
        <div className={styles.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="initial">
                        {data.title} - {data.population}
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        label="Births"
                        value={births}
                        onChange={(e) => {handleChangeBirths(Number(e.target.value))}}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Deaths"
                        value={deaths}
                        onChange={(e) => {handleChangeDeaths(Number(e.target.value))}}
                    />
                </Grid>
                {
                    Object.keys(otherAnimals)?.map(item => {
                        return (
                            <Grid item key={otherAnimals[item].title}>
                                <TextField
                                    label={data.title !== otherAnimals[item].title ? `Killed by ${otherAnimals[item].title}s/es` : `Killed by other ${otherAnimals[item].title}s/es`}
                                    onChange={(e) => {handleChangeKills(Number(e.target.value), otherAnimals[item].title)}}
                                />
                            </Grid>
                                )
                    })
                }
            </Grid>
        </div>
    )
}