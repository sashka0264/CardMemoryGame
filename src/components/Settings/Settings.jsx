import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./Settings.module.scss";

const useStyles = makeStyles((theme) => ({
  start: {
    marginTop: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const Settings = ({ initializeAC }) => {
  const classes = useStyles();
  const [grid, setGrid] = useState({ error: false, value: ''});
  const [open, setOpen] = useState(false);

  const startGame = () => {
    if (!grid.value) {
      if (!grid.error) setGrid({ ...grid, error: true });
      return;
    } 
    setGrid({ error: false, value: '', open: false });
    initializeAC(grid.value);
  }


  const handleChange = (e) => {
    if (!e.target.value) {
      setGrid({ value: e.target.value, error: true});
    } else {
      setGrid({ value: e.target.value, error: false});
    }
  }
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className={styles.settings}>
      <h3>Welcome to Card Memory Game!</h3>

      <img 
        src="https://cdn.dribbble.com/users/218750/screenshots/2090988/sleeping_beauty.gif" 
        alt="cat" 
        className={styles.image}
      />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Grid size (n x n, max 10)</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={grid.value}
          onChange={handleChange}
          error={grid.error}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>2 x 2</MenuItem>
          <MenuItem value={4}>4 x 4</MenuItem>
          <MenuItem value={6}>6 x 6</MenuItem>
          <MenuItem value={8}>8 x 8</MenuItem>
          <MenuItem value={10}>10 x 10</MenuItem>
        </Select>
      </FormControl>


      <Button 
        className={classes.start} 
        variant="outlined" 
        color="secondary" 
        onClick={startGame}
      >
        Start Game
      </Button>
    </div>
  )
}

export default Settings;