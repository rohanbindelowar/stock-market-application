import axios from 'axios';
import React from 'react'
import "../styles/Search.css"

const Search = (props) => {

    function handleChange(e){
        props.setName(e.target.value)
    }
    function handleClick(e){
        if(props.name =="") return;
       axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${props.name}&interval=5min&apikey=demo`)
        
    }
  return (
    <div className='searchWrapper'>
        <input type='text' id='search-bar' placeholder='enter stock name' value={props.name} onChange={handleChange}/>
        <button id='search-button' onClick={handleClick}>Search</button>
    </div>
  )
}
export default Search;
