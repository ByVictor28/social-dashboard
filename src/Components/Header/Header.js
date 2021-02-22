import React from 'react';
import classes from "./Header.module.scss";
import Switch from '../UI/Switch/Switch';

const Header = ({change})=>{ 
return (
    <div className={classes.Header}>
        <div className={classes.HeaderContent}>
            <div className={classes.Titulo}>
                <h1>Social Media Dashboard</h1>
                <span>Total Followers: 23,004</span>
            </div>
            <div className={classes.Switch}>
                <span>Dark Mode</span>
                <Switch change={change}/>
            </div>
        </div>
    </div>
) 
}

export default Header
