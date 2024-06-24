import { useEffect, useState } from 'react';
import './_app.sass';
import Homepage from './features/Homepage/Homepage';
import Navbar from './features/Nav_bar/Nav_Bar';
import Head from './features/video_header/video_head';
import Footer from './features/Footer/Footer';

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Head className={theme} />
      <Homepage className={theme} />
      <Footer className={theme} />
    </div>
  );
}

export default App;
