import React from 'react';
import {Select,  MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container:{
        borderWidth: 0, marginRight: 10, paddingTop:10,

    },
    item:{
        fontFamily: 'roboto',
        color: '#616161',
        fontWeight: 800,
        fontSize: 24,
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize:15,
        },
    }
}));
function Translate(props) {
    const classes = useStyles();
    return (
        <>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                disableUnderline
                className={classes.container}
                defaultValue={10}
            >
                <MenuItem value={20}>
                    <span className={classes.item}>русский</span>
                </MenuItem>
                <MenuItem value={10}>
                    <span className={classes.item}>English</span>
                </MenuItem>
            </Select>
        </>
    );
}

export default Translate;