import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Topnav from './components/Topnav';
import NavLinks from './components/NavLinks';
import Page1 from './components/Page1';
import './App.css';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page14 from './components/Page14';
// import Page145 from './components/Page145';
// import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Footer from './components/Footer';

// import Sidenav from './components/Sidenav';
 
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-t from-slate-200 to-slate-50 min-h-screen">
        
        <Topnav />
       
        <Page1 />
        <div className='bg-white'>
        <NavLinks />
        </div>
        <Page2 />
        <Page3 />
        <Page14 />
        {/* <Page145/> */}
        {/* <Page4 /> */}
        <div className='bg-white'>
        <Page5 />
        </div>
        <Page6 />
        <Page7 />
        <Page8 />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
 
export default App;
 
 
 
 
 
 
 
 
 
 
 
// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import Sidenav from './components/Sidenav'
 
 
// // const root = ReactDOM.createRoot(document.grtElementById('root'));  //pass the Dom element
// // const element=<h1>Hello everyone!!</h1>;
// // root.render(element); //react
 
 
 
// function App() {
//   // const [count, setCount] = useState(0)
 
//   return (
    
//       <div>
//         <Sidenav />
//       </div>
//   )
// }
 
// export default App