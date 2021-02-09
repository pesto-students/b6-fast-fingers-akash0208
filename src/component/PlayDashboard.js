import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import Timer from './Timer'

const PlayDashboard = props => {
  const [state, setState] = useState({
    inputRandom: '',
    realValue: [],
    id: [],
    lockInput: false
  })

  useEffect(() => {
    setState({
      ...state,
      realValue: props.randomWord.split('')
    })
  }, [props])

  const handleSubmit = e => {
    let value = e.target.value.toUpperCase()
    value = value.split('')
    let _ids = []
    for (let i = 0; i < realValue.length; i++) {
      if (realValue[i] === value[i]) {
        _ids.push(i)
      }
      console.log(realValue.length, _ids.length)
      if (realValue.length === _ids.length) {
        props.addBoard({ name: 'Game', time: localStorage.getItem('time') })
        setState({ ...state, id: [], inputRandom: '' })
      }
    }
    setState({ ...state, id: _ids, inputRandom: e.target.value })
    if (value.length == realValue.length) {
      setState({ ...state, id: [], inputRandom: '' })
    }
  }

  const { inputRandom, realValue, id, lockInput } = state
  return (
    <Fragment>
      <div className='timer'>
        <Timer lockInputs={() => setState({ ...state, lockInput: true })} />
        <div className='word'>
          {realValue.map((item, i) => (
            <span key={i} style={i === id[i] ? { color: '#008000' } : {}}>
              {item}
            </span>
          ))}
        </div>
        <input
          type='text'
          className='typeRandom'
          value={inputRandom}
          onChange={handleSubmit}
          readOnly={lockInput}
        />
      </div>
    </Fragment>
  )
}

export default PlayDashboard
