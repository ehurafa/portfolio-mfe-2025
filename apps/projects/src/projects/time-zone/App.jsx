// @ts-nocheck
import { useState } from 'react'
import './App.css'

import TimeZoneClock from './components/TimeZoneClock'

function App() {
  const timezones = [
    'UTC',
    'GMT',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Tokio'
  ]

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [selectedTimeZones, setSelectedTimeZones] = useState([localTimeZone])

  const addTimeZone = e => {
    const newTime = e.target.value

    console.log(selectedTimeZones)

    if (!selectedTimeZones.includes(newTime)) {
      setSelectedTimeZones(...selectedTimeZones, newTime)
      console.log(selectedTimeZones)
    }
  }

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={e => addTimeZone(e)}>
        <option value="" disabled select>
          Selecione o fusu horário
        </option>
        {timezones.map(time => (
          <option value={time} key={time}>
            {time}
          </option>
        ))}
      </select>
      <div>
        <hr />
        <p>{selectedTimeZones}</p>
        <hr />
        {selectedTimeZones &&
          selectedTimeZones.map(timezone => <TimeZoneClock key={timezone} timeZone={timezone} />)}
      </div>
    </div>
  )
}

export default App
