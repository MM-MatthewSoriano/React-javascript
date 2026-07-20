import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Profile from './components/Profile.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Matt";
  const age = 22;
  const city = "Pasay";

  return ( 
    // Lesson 1
    // exc 1
    // <h1>Hello React</h1>

    // exc 2
    // <h1>Hello {name}</h1>

    <div>
      {/* exc 3 */}
      {/* <h1>My Favorite Language</h1>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Python</li>
      </ul> */}

      {/* exc 4 */}
      <h1>Age: {age}</h1>
      <h1>City: {city}</h1>

      {/* exc 5 */}
      <Profile />

    </div>
  );
}

export default App
