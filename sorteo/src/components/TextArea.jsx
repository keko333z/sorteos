import { useState } from "react";

export function TextArea({setList,setNumber}){
    
    const [text, setText] = useState("")
    const [numberWinners, setNumberWinners] = useState(1)
    
    const handleSubmit= (e) => {
        e.preventDefault()
        const listArray = text.toString().split('\n')
        listArray.splice(listArray.length-1,1)
        setList(listArray)
        setNumber(numberWinners)
    }

    return <>
    <div className="textarea-div"> 
        <form onSubmit={handleSubmit} >
            <h3>Enter the list!</h3>
            <p>Every option in one row</p>
            <div ><textarea className="textarea" cols={20} rows={10} value={text} onChange={e =>setText(e.target.value)}>
            </textarea></div><br></br>
            <h4>Number of winners:</h4>
            <input placeholder="number of winners" value={numberWinners} onChange={e=>setNumberWinners(e.target.value)}></input><br></br>
            <button>Draw</button>
        </form>  

    </div>
    </>
}