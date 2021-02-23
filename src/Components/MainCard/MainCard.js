import React from 'react'
import classes from "./MainCard.module.scss"

const MainCard = ({image,name,current,tipe,amount,color,Top,click})=>{ 
    const top = {

    }
return (
    <div className={`${classes.MainCard} ${Top}`} onClick={() => click(Top)}>
        <div className={Top==="instagram"?classes.Mask:""}>
            <div>
                <img src={`/images/${image}`} alt="ICON"/>
                <span>{name}</span>
            </div>
            <div className={classes.Followers}>
                <p>{current}</p>
                <span>{tipe}</span>
            </div>
            <div>
                {color == "red"
                ?
                <>
                    <img src="/images/icon-down.svg" alt="ICON"/>
                    <span className="negative">{amount} Today</span>
                </>
                :
                <>
                    <img src="/images/icon-up.svg" alt="ICON"/>
                    <span className="positive">{amount} Today</span>
                </>
                }
            </div>
        </div>
    </div>
) 
}

export default MainCard
