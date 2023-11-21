import { useEffect, useState } from "react";

function getResults (Olist, number, setResultList) {
        const result = [];
        for (let i = 0; i < number; i++) {
        let index = Math.floor(Math.random() * Olist.length);
            result.push(Olist[index]);
            Olist.splice(index, 1);

        }
        setResultList(result)
}

export function Results ({list, number}) {
    
    const [resultList, setResultList] = useState([])
    

    useEffect(()=>{
        if (list.length>0) {
        const listcopy = [...list] 
        getResults(listcopy, number, setResultList)
        }
     

    },[number,list])
    
    

    return <div className='results'>
        
            <h3>Results:</h3><p></p>
            <ul className="results-list">
            
            {resultList.map((e,i)=>{ return (resultList.length>0) ? <li  style={ (i%2===0 ? {background: '#37548C', marginTop: '3px', padding: '3px', borderRadius: '6px'} : {background: '#3E801B', marginTop: '3px', padding: '3px', borderRadius: '6px'}) } key={i}>{e}</li> : ""})}
            </ul>
        
    </div>



}