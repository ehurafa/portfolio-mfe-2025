import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// @ts-expect-error - Timer app uses .jsx which TypeScript doesn't recognize by default
import TimerApp from './projects/timer/src/App'
import TodoApp from './projects/todo-app/App'
// @ts-expect-error - Weather app uses .jsx which TypeScript doesn't recognize by default
import WeatherApp from './projects/weather/src/App'
// @ts-expect-error - .jsx import
import CalculatorApp from './projects/calculator/App'
// @ts-expect-error - .jsx import
import CurrencyConverterApp from './projects/currency-converter/App'
// @ts-expect-error - .jsx import
import QuotesApp from './projects/quotes/App'
// @ts-expect-error - .jsx import
import PhotoAlbumApp from './projects/photo-album/App'
// @ts-expect-error - .jsx import
import MarkdownViewerApp from './projects/markdown-viewer/App'
// @ts-expect-error - .jsx import
import TimeZoneApp from './projects/time-zone/App'
// @ts-expect-error - .jsx import
import HashGameApp from './projects/hash-game/App'
// @ts-expect-error - .jsx import
import TodoReduxApp from './projects/todo-redux/App'

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/timer" element={<TimerApp />} />
        <Route path="/calculator" element={<CalculatorApp />} />
        <Route path="/currency-converter" element={<CurrencyConverterApp />} />
        <Route path="/quotes" element={<QuotesApp />} />
        <Route path="/photo-album" element={<PhotoAlbumApp />} />
        <Route path="/markdown-viewer" element={<MarkdownViewerApp />} />
        <Route path="/time-zone" element={<TimeZoneApp />} />
        <Route path="/hash-game" element={<HashGameApp />} />
        <Route path="/todo-redux" element={<TodoReduxApp />} />
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  )
}
