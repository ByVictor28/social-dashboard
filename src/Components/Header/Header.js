import React,{useEffect,useState} from 'react';
import classes from "./Header.module.scss";
import Switch from '../UI/Switch/Switch';
import MainCard from '../MainCard/MainCard';
import Overview from '../Overview/Overview';
import axios from 'axios';
const CardList = [
    {image:"icon-facebook.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"green",Top:"facebook"},
    {image:"icon-twitter.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"green",Top:"twitter"},
    {image:"icon-instagram.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"green",Top:"instagram"},
    {image:"icon-youtube.svg",name:"@VictorD",current:"99999",tipe:"Followers",amount:"19",color:"red",Top:"youtube"},
  ]
  
const Header = ({change})=>{
    const [listFollowers, setListFollowers] = useState({
        facebook:{followers:12},
        twitter:{followers:99},
        instagram:{followers:2311},
        youtube:{followers:123}
    })
    useEffect(async () => {
        try {
            // console.log(listFollowers.facebook);
            // const list = await axios.get("http://localhost:5001/social-functions-e1f3c/us-central1/getFollowers");
            // console.log(list.data.lista);
            // setListFollowers(list.data.lista)
        } catch (error) {
            console.log(error);
        }
    }, [])
    
    const handleclick =async (id) => {
        // console.log(id);
        try {
            
            // const res = await axios.get(`http://localhost:5001/social-functions-e1f3c/us-central1/addFollowers?site=${id}`);
            // console.log(res);
            
            // const newArray = {...listFollowers}
            // console.log(newArray);
            setListFollowers({...listFollowers,  [id]:{followers:listFollowers[id].followers+1}  });
            console.log(listFollowers);

            
        } catch (error) {
            console.log(error.message);
        }
        
    }
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
                current={listFollowers[card.Top].followers}
                tipe={card.tipe}
                amount={card.amount}
                color={card.color}
                Top={card.Top}
                click={handleclick}
                />
            })}
        </div>
        <Overview/>
    </div>
    </>
) 
}

export default Header
