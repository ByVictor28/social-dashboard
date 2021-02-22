import React from 'react'
import classes from "./Switch.module.scss"
const Switch = ({change})=>{ 
    return (
        <label className={classes.switch}>
            <input type="checkbox" onChange={change}/>
            <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
    ) 
}
export default Switch;
