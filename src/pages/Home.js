import React, { useState, useEffect } from 'react'

const Home = props => {
  const [state, setState] = useState({
    username: '',
    level: 'easy'
  })

  useEffect(() => {
    const preUserName = localStorage.getItem('userName')
    if (preUserName === state.username) {
      props.history.push('/play')
    }
    if (localStorage.getItem('userName')) {
      setState({ ...state, username: localStorage.getItem('userName') })
    }
    return () => {
      console.log('Home unmounted')
    }
  }, [])

  const startGame = () => {
    if (state.username.trim() == '') {
      alert('Please enter your name')
      return
    }
    localStorage.setItem('userName', state.username)
    localStorage.setItem('level', state.level)

    props.history.push('/play')
  }

  const handleName = e => {
    setState({ ...state, username: e.target.value })
  }

  const handleLevel = e => {
    setState({ ...state, level: e.target.value })
  }

  const { username, level } = state

  return (
    <div className='container'>
      <img src={require('../assets/working.png')} alt='' className='mainIcon' />
      <span className='fastFingerText'>fast fingers</span>
      <div className='titleContainer'>
        <hr className='titleLine' />
        <span className='ultimateText'>THE ULTIMATE TYPING GAME </span>
        <hr className='titleLine' />
      </div>

      <input
        className='nameInput'
        placeholder='TYPE YOUR NAME'
        value={username}
        onChange={handleName}
      />

      <select
        className='dropdown'
        name='DIFFICULTY LEVEL'
        value={level}
        onChange={handleLevel}
      >
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>

      <span className='startGame' onClick={startGame}>
        Start Game
      </span>
    </div>
  )
}

export default Home
