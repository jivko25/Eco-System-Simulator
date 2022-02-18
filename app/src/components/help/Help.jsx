import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Grid } from '@mui/material'

export default function Help({open, onClose}){
    return(
        <Dialog
        open={open}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"How to use Eco System Simulator"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
            <p>1. Add new animal from "Add".</p>
            <p>2. Select its name and starting population</p>
            <p>3. Add births and deaths percentage per year.</p>
            <p>4. Add number of years</p>
            <p>5. Click "Start" button</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    )
}