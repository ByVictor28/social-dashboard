import React from 'react'
import classes from "./SubCard.module.scss"

const SubCard = ({image,title,color,number,porcentage})=>{ 

    return (
        <div className={classes.SubCard}>
            <div>
                <span className={classes.Title}>{title}</span>
                <img src={`images/icon-${image}.svg`} alt="ICON"/>
            </div>
            <div>
                <span className={classes.Number}>{number}</span>
                {
                    color === "red"
                    ?
                        <div className="negative">
                            <img src="images/icon-down.svg" alt="ICON"/>
                            <span>{porcentage}%</span>
                        </div>
                    :
                        <div className="positive">
                            <img src="images/icon-up.svg" alt="ICON"/>
                            <span>{porcentage}%</span>
                        </div>
                }
            </div>
        </div>
    ) 
}

export default SubCard
