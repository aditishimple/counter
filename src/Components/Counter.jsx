import React from 'react'

function Counter(props) {
    const [count, setCount] = React.useState(props.initialvalue);

    function changeCount(val){
        setCount(count + val);
    }

    function doubleCounter(val){
        setCount(count * val);
    }
    // if(count < 0 || count >= 10){
    //     return <h1>Counter should be between 0 and 10</h1>
    // }

    return (
        <>
            <div>Counter:{count}</div>
            <button onClick={() => changeCount(+1)}>ADD</button>
            <button onClick={() => changeCount(-1)}>SUB</button>
            <button onClick={() => doubleCounter(2)}>DOUBLE</button>
            {/* <div>{count%2===0 ? <h1>Even</h1> : <h1>Odd</h1>}</div> */}
        </>
    )
}

export {Counter};