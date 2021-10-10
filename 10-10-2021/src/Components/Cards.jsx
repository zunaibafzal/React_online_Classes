import React from 'react'


function Cards(props) {
    return (
        <div>
            <div>
                <img src={props.imgsrc} alt="" width="500px" />
                <h1>{props.sName}</h1>
                <p>{props.title}</p>
                <button>Click Me</button>
            </div>         
            
        </div>
    )
}

export default Cards;




