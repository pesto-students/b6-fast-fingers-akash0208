import React from 'react'
import { Fragment } from 'react'

const ScoreBoard = props => {
  return (
    <Fragment>
      <div className='scorecard'>
        <span className='scoreBoardText'>SCORE BOARD</span>
        {props.data.map(item => (
          <div className='board'>
            <span>{item.name}</span>&nbsp;
            <span>:</span>&nbsp;
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default ScoreBoard
