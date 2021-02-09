import React from 'react'
import { Fragment } from 'react'

const Score = props => {
  return (
    <Fragment>
      <div className='rightHeader'>
        <span className='headlines'>fast fingers</span>
        <span className='headlines'>SCORE: {props.score}</span>
      </div>
    </Fragment>
  )
}

export default Score
