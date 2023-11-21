import { useState } from 'react'
import { Results } from './components/Results'
import { TextArea } from './components/TextArea'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [number, setNumber] = useState(1)
  
  

  return (
    <div className='app-container'>
     <TextArea setList={setList} setNumber={setNumber}/>
     <Results list={list} number={number}/>
     
    </div>
  )
}
 
export default App
