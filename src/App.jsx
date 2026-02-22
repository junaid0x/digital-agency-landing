import React, {useState, useRef, use, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Help from './components/Help';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? 
  localStorage.getItem('theme') : 'light');

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  //Custom Cursor Logic
  const mouse = useRef({
    x: 0,
    y: 0
  });

  const dot = useRef({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const moveDot = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

       
    }

    document.addEventListener('mousemove', moveDot);
    const animateDot = () => {
      dot.current.x += (mouse.current.x - dot.current.x) * 0.1;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.1;

      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${dot.current.x - 20}px, ${dot.current.y - 20}px, 0)`;
      }

    

      requestAnimationFrame(animateDot);
    }

    animateDot();

    return () => {
      document.removeEventListener('mousemove', moveDot);
    };

  }, []);

  

  return (
    <div className='dark:bg-black relative'>
      <Toaster position='top-right' reverseOrder={false} />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Help/>
      <Work/>
      <Team/>
      <Contact/>
      <Footer theme={theme} />
      {/*Custome Cursor Ring*/}

      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full 
      border border-primary pointer-events-none z-9999'
      style={{transition: 'transform 0.1s ease-out'}}></div>

      {/*Custom Cursor Dot*/}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full
       bg-primary pointer-events-none z-9999'></div>


    </div>

      
  );
}

export default App;
  