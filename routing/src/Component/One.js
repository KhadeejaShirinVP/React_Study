import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div style={{backgroundColor:'yellow' , width:'500px'}}>
        <h1>Layer one</h1>
        <Two/>
    </div>
  )
}

export default One