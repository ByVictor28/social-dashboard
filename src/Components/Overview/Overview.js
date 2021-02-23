import React from 'react'
import SubCard from '../SubCard/SubCard'
import classes from "./Overview.module.scss"

const listCards= [
    {image:"facebook",title:"Page Views",color:"red",number:"99",porcentage:"15",},
    {image:"facebook",title:"Likes",color:"green",number:"588",porcentage:"33",},
    
    {image:"twitter",title:"Page Views",color:"red",number:"99",porcentage:"15",},
    {image:"twitter",title:"Likes",color:"green",number:"588",porcentage:"33",},
    
    {image:"instagram",title:"Page Views",color:"red",number:"99",porcentage:"15",},
    {image:"instagram",title:"Likes",color:"green",number:"588",porcentage:"33",},

    
    {image:"youtube",title:"Page Views",color:"red",number:"99",porcentage:"15",},
    {image:"youtube",title:"Likes",color:"green",number:"588",porcentage:"33",},
]
const Overview = (props)=>{ 
return (
    <div className={classes.Overview}>
        <h2>Overviex - Today</h2>
        <div className={classes.Lista}>
            {listCards.map((card,index) => {
                return <SubCard
                key={index}
                image={card.image}
                title={card.title}
                color={card.color}
                number={card.number}
                porcentage={card.porcentage}
                />
            })}
        </div>
    </div>
) 
}

export default Overview
