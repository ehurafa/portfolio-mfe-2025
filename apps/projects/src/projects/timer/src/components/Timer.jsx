import { useEffect, useState } from 'react'

import LapList from './LapList'
import TimerControls from './TimerControls'
import TimerDisplay from './TimerDisplay'

import './Timer.css'

const Timer = () => {
  const [millisenconds, setMilliseconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [laps, setLaps] = useState([])

  const formatTime = () => {
    const minutes = `0${Math.floor(millisenconds / 60000) % 60}`.slice(-2)
    const seconds = `0${Math.floor(millisenconds / 1000) % 60}`.slice(-2)
    const centiseconds = `0${Math.floor(millisenconds / 10) % 100}`.slice(-2)

    return `${minutes}:${seconds}:${centiseconds}`
  }

  const resetTimer = () => {
    setMilliseconds(0)
    setTimerOn(false)
    setLaps([])
  }

  const addLap = () => {
    setLaps([...laps, formatTime()])
  }

  console.log(laps)

  useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setMilliseconds(prevMilliseconds => prevMilliseconds + 10)
      }, 10)
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval)
      }
    }
  }, [timerOn])

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />
      <LapList laps={laps} />
    </div>
  )
}

export default Timer
