import React from 'react';
import classes from "./Header.module.scss";
import Switch from '../UI/Switch/Switch';
import MainCard from '../MainCard/MainCard';
import Overview from '../Overview/Overview';
const CardList = [
    {image:"icon-facebook.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"green",Top:"Facebook"},
    {image:"icon-twitter.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"green",Top:"Twitter"},
    {image:"icon-instagram.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"green",Top:"Instagram"},
    {image:"icon-youtube.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"red",Top:"Youtube"},
  ]
  
const Header = ({change})=>{ 
return (
    <>
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
        
        <div className={classes.List}>
            {CardList.map((card,index) => {
                return <MainCard
                key={index}
                image={card.image}
                name={card.name}
                current={card.current}
                tipe={card.tipe}
                amount={card.amount}
                color={card.color}
                Top={card.Top}
                />
            })}
        </div>
        <Overview/>
    </div>
    </>
) 
}

export default Header
