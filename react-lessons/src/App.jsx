import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MainContent from './components/MainContent.jsx' 
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'
import Sidebar from './components/Sidebar.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const name = "Matt";
  // const age = 22;
  // const city = "Pasay";

  return ( 
    <div>
      {/* exc 1 */}
      {/* Create a header component render in app */}
      <Header />

      {/* Create a sidebar component render in app */}
      {/* exc 4 */}
      <Sidebar />

      {/* exc 5 */}
      {/* Create a maincontent component render in app, it must only render from profile */}
      <MainContent />

      {/* exc 2 */}
      {/* Create a footer component render in app */}
      <Footer />

      {/* exc 3 */}
      {/* Create a button component render in app */}
      {/* <Button />
      <Button /> */}


    </div>
  );
}

export default App
