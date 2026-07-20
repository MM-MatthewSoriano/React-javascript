import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Profile from './components/Profile.jsx'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const name = "Matt";
  // const age = 22;
  // const city = "Pasay";

  return ( 
    <div>
      {/* exc 1 */}
      {/* modify profile component so that it receives name */}
      <Profile name="Matt" />

      {/* exc 2 */}
      {/* do it for age */}
      <Profile age={22} />

      {/* exc 3 */}
      {/* display both city and job */}
      <Profile 
      city="Pasay" 
      job="Future DevOps Engineer"
      />

      {/* exc 4 */}
      {/* Your Button component should display whatever text is passed. */}
      <Button text="Save" />
      <Button text="Delete" />
      <Button text="Cancel" />

      {/* exc 5 */}
      {/*Create 3 different profiles */}
      <Profile
      name="Matt"
      age={22}
      city="Pasay"
      job="Future React Developer"
      />

      <Profile
      name="John"
      age={25}
      city="Cebu"
      job="Designer"
      />

      <Profile
      name="Jane"
      age={28}
      city="Davao"
      job="Project Manager"
      />
    </div>
  );
}

export default App
