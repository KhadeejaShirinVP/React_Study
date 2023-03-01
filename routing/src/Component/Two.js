import React,{useContext} from 'react'
import { AppContext } from '../AppContext'

function Two(props) {
  const {data}=useContext(AppContext)
  return (
    <div style={{backgroundColor:'rebeccapurple', width:'200px'}}>
        <h1>Layer Two {data}</h1>
    </div>
  )
}

export default Two