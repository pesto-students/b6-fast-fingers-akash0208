import React, { useEffect, useState } from 'react'
import PlayDashboard from '../component/PlayDashboard'
import Score from '../component/Score'
import ScoreBoard from '../component/ScoreBoard'
import UserDetails from '../component/UserDetails'

const Play = (props) => {
  const [state, setState] = useState({
    score: 0,
    randomWord: '',
    scoreData: []
  })
  const makeid = len => {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var charactersLength = characters.length
    for (var i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  useEffect(() => {
    const level = localStorage.getItem('level')
    let word = ''
    switch (level) {
      case 'easy':
        word = makeid(Math.floor(Math.random() * (4 - 1 + 1)) + 1)
        localStorage.setItem('maxTime', Math.round(word.length / 1))
        setState({
          ...state,
          randomWord: word
        })
        break
      case 'medium':
        word = makeid(Math.floor(Math.random() * (8 - 4 + 1)) + 4)
        localStorage.setItem('maxTime', Math.round(word.length / 1.5))
        setState({
          ...state,
          randomWord: word
        })
        break
      case 'hard':
        word = makeid(Math.floor(Math.random() * (10 - 8 + 1)) + 8)
        localStorage.setItem('maxTime', Math.round(word.length / 2))
        setState({
          ...state,
          randomWord: word
        })
        break
    }
    return () => {
      console.log('Play unmount')
    }
  }, [])

  const handleBoard = dataPiece => {
    let scoreBoard = [...state.scoreData]
    scoreBoard.push(dataPiece)
    const level = localStorage.getItem('level')
    let word = ''
    switch (level) {
      case 'easy':
        word = makeid(Math.floor(Math.random() * (4 - 1 + 1)) + 1)
        localStorage.setItem('maxTime', Math.round(word.length / 1))
        setState({
          ...state,
          randomWord: word,
          scoreData: scoreBoard
        })
        break
      case 'medium':
        word = makeid(Math.floor(Math.random() * (8 - 4 + 1)) + 4)
        localStorage.setItem('maxTime', Math.round(word.length / 1.5))
        setState({
          ...state,
          randomWord: word,
          scoreData: scoreBoard
        })
        break
      case 'hard':
        word = makeid(Math.floor(Math.random() * (10 - 8 + 1)) + 8)
        localStorage.setItem('maxTime', Math.round(word.length / 2))
        setState({
          ...state,
          randomWord: word,
          scoreData: scoreBoard
        })
        break
    }
  }

  function quitGame() {
    localStorage.removeItem("time");
    props.history.push('/home')
  }

  const { score, randomWord, scoreData } = state
  return (
    <div className='playContainer'>
      <div className='header'>
        <UserDetails />
        <Score score={score} />
      </div>
      <div className='midcontent'>
        <ScoreBoard data={scoreData} />
        <PlayDashboard randomWord={randomWord} addBoard={handleBoard} />
        <div className='blank'></div>
      </div>
      <div style={{ color: '#d54235', marginTop: 100, fontSize: 40 }} onClick={quitGame}>Quit Game</div>
    </div>
  )
}

export default Play
