import styles from "./Item.module.scss";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useState } from "react";
import Typography from '@mui/material/Typography'
import AddITem from "../add-item-modal/AddItem";
import Button from '@mui/material/Button'

export default function Item({data, otherAnimals}){

    const [births, setBirths] = useState(data.births);
    const [deaths, setDeaths] = useState(data.deaths);
    return(
        <div className={styles.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" color="initial">
                        {data.title}
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        label="Births"
                        value={births}
                        onChange={(e) => {setBirths(e.target.value)}}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Deaths"
                        value={deaths}
                        onChange={(e) => {setDeaths(e.target.value)}}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Deaths"
                        value={deaths}
                        onChange={(e) => {setDeaths(e.target.value)}}
                    />
                </Grid>
                {
                    otherAnimals.map(item => {
                        return (
                            <Grid item key={item.title}>
                                <TextField
                                    label={item.title}
                                    value={deaths}
                                    onChange={(e) => {setDeaths(e.target.value)}}
                                />
                            </Grid>
                                )
                    })
                }
            </Grid>
        </div>
    )
}