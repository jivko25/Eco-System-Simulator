import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField } from '@mui/material'
import { useState } from 'react';
import styles from './AddItem.jsx'

export default function AddItem({open, onClose, onAdd}){
    const [title, setTitle] = useState('');
    const addItem = () => {
        onAdd(title);
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
            <TextField
              label="Title"
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
              
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={addItem}>Add</Button>
        </DialogActions>
      </Dialog>
    )
}