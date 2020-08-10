import React from 'react';
import {Select,  MenuItem} from "@material-ui/core";

function Translate(props) {
    return (
        <>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                disableUnderline
                style={{borderWidth: 0, marginRight: 10}}
                defaultValue={10}
            >
                <MenuItem value={20}>
                    <span style={{
                        fontFamily: 'roboto',
                        color: '#424242',
                        fontWeight: 800,
                        fontSize: 24,
                        marginLeft: 10
                    }}>русский</span>
                </MenuItem>
                <MenuItem value={10}>
                    <span style={{
                        fontFamily: 'roboto',
                        color: '#424242',
                        fontWeight: 800,
                        fontSize: 24,
                        marginLeft: 10
                    }}>English</span>
                </MenuItem>
            </Select>
        </>
    );
}

export default Translate;