import React from 'react';
import {Select,FormControl,MenuItem} from "@material-ui/core";
import RussianFlag from '../Assets/Img/Flags/RU.png'
import USAFlag from '../Assets/Img/Flags/US.png'

function Translate(props) {
    return (
        <>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    disableUnderline
                    style={{borderWidth:0,marginRight:10}}
                    defaultValue={10}
                >
                    <MenuItem value={20}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={RussianFlag} width="32px"/>
                            <span style={{fontFamily:'roboto',color:'#424242',fontWeight:800,fontSize:24,marginLeft:10}}>русский</span>
                        </div>
                    </MenuItem>
                    <MenuItem value={10}><div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img src={USAFlag} width="32px"/>
                        <span style={{fontFamily:'roboto',color:'#424242',fontWeight:800,fontSize:24,marginLeft:10}}>English</span>
                    </div>
                        </MenuItem>
                </Select>
        </>
    );
}

export default Translate;