import React from 'react'

const TimerControls = ({ timerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">
      {!timerOn && (
        <button type="button" onClick={onStart}>
          Iniciar
        </button>
      )}
      {timerOn && (
        <button type="button" onClick={onStop}>
          Parar
        </button>
      )}
      {timerOn && (
        <button type="button" onClick={onLap}>
          Volta
        </button>
      )}
      <button type="button" onClick={onReset}>
        Zerar
      </button>
    </div>
  )
}

export default TimerControls
