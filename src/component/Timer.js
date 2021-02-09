import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'

const Timer = props => {
  const [state, setState] = useState({
    time: '00:00',
    timePercent: 0
  })
  const maxTime = localStorage.getItem('maxTime')

  useEffect(() => {
    initializeClock(new Date(Date.parse(new Date()) + maxTime * 60 * 1000))
  }, [])

  let timeinterval
  const getTimeRemaining = endtime => {
    const total = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    return {
      total,
      minutes,
      seconds
    }
  }

  const initializeClock = endtime => {
    const updateClock = () => {
      const t = getTimeRemaining(endtime)
      const minutes = ('0' + t.minutes).slice(-2)
      const seconds = ('0' + t.seconds).slice(-2)
      const timeString = minutes + ':' + seconds
      const timePer =
        100 -
        Math.round(
          (((Number(minutes) * 60 + Number(seconds)) * 1000) /
            (maxTime * 60 * 1000)) *
            100
        )
      localStorage.setItem('time', timeString)
      setState({
        ...state,
        time: timeString,
        timePercent: timePer
      })
      if (t.total <= 0) {
        setState({ ...state, timePercent: 0 })
        props.lockInputs()
        clearInterval(timeinterval)
      }
    }
    updateClock()
    timeinterval = setInterval(updateClock, 1000)
  }

  const { time, timePercent } = state
  return (
    <Fragment>
      <div className='progress-circle-wrapper'>
        <div
          className={`progress-circle p${timePercent} ${
            timePercent > 50 ? 'over50' : ''
          } `}
        >
          <span className='progressValue'>{time}</span>
          <div className='progress-value-container'>
            <div className='progress-value'></div>
          </div>
          <div className='left-half-clipper'>
            <div className='first50-bar'></div>
            <div className='value-bar'></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Timer
