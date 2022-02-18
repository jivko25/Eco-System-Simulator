import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Grid } from '@mui/material'
import { useState } from 'react';
import styles from './AddItem.jsx'

export default function AddItem({open, onClose, onAdd}){
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(0);
    const addItem = () => {
        onAdd(title, Number(start));
        setTitle('');
        setStart(0)
        onClose();
    }
    return(
        <Dialog
        open={open}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                    <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                    fullWidth
                    />
              </Grid>
              <Grid item xs={12}>
                    <TextField
                    label="Start number"
                    value={start}
                    onChange={(e) => {setStart(e.target.value)}}
                    fullWidth
                        />
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={addItem}>Add</Button>
        </DialogActions>
      </Dialog>
    )
}