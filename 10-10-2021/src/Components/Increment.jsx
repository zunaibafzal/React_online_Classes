import React, {useState} from 'react'


function Increment() {

    const [count, setCount] = useState(0);

    let CurrTime = new Date().toLocaleTimeString();

    const [cTime, setcTime] = useState(CurrTime)

    const updatedTime = () => {

        CurrTime = new Date().toLocaleTimeString();
        setcTime(CurrTime)
    }

    const [changeColor, setchangeColor] = useState("yellow")



    return (
        <div>
            <h1>Incement Numbers </h1>
            <h1> {count} </h1>           
            <button onClick={() => setCount( count + 1 ) } > Incement </button>

            <h1>Get Time</h1>
            <h1> {cTime} </h1>
            <button onClick={updatedTime} > Get Time </button>


            <h1 style={{color: changeColor }}>City of Lights</h1>
            <button onClick={() => setchangeColor("red")} > Red </button>
            <button onClick={() => setchangeColor("green")} > Green </button>
            <button onClick={() => setchangeColor("blue")} > Blue </button>
            <button onClick={() => setchangeColor("blue")} > Blue </button>
            <button onClick={() => setchangeColor("blue")} > Blue </button>
            <button onClick={() => setchangeColor("blue")} > Blue </button>
            <button onClick={() => setchangeColor("blue")} > Blue </button>


        </div>
    )
}

export default Increment
