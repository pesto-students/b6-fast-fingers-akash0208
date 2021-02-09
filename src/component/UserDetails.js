import React from 'react'
import { Fragment } from 'react'

const UserDetails = () => {
  return (
    <Fragment>
      <div className='leftHeader'>
        <span className='headlines userDetails'>
          {localStorage.getItem('userName')}
        </span>
        <span className='headlines userDetails'>
          LEVEL: {localStorage.getItem('level')}
        </span>
      </div>
    </Fragment>
  )
}

export default UserDetails
