import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';  
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: { 
        '& > *': {
            margin: theme.spacing(4),
          },
        minWidth: "100%",
        display: "flex",    
        justifyContent: "center"
    },
  }));

export default function Landbutton() {
    const classes = useStyles()
    const showData = useSelector(state => state.showData);
    
    const dispach = useDispatch();

    const show = () => {
        dispach({ type : 'SHOW_DATA'});
    }

    const clear = () => {
        dispach({ type : 'CLEAR_DATA'});
    }

    return (
        <div className={classes.root}>
            <Button onClick={show} variant="outlined" color="primary">Show Table</Button>
            <Button onClick={clear} variant="outlined" color="secondary">Hide Table</Button>
        </div>
    )
}
