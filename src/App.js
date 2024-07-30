import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#301934';
      showAlert("Dark Mode has been successfully enabled", "success");
      document.title = "Textutils - Dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been successfully enabled", "success");
      document.title = "Textutils - Light mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Code with Muzammil" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform headings21="Enter the text for the operation" toggleMode={toggleMode} showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import React,{useState} from 'react'
// import Textform from './components/Textform';
// import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// function App() {
//   const [mode,setmode]=useState('light')
//   const  [alert,setAlert]=useState(null)

//   const showalert=(message,type)=>{
      
//     setAlert({
//          msg:message,
//          type1:type
//     })
    
//     setTimeout(() => {
//           setAlert(null)
//     }, 2000);

//   }

//   const togglemode=()=>{
//     if(mode==='light')
//     {
//       setmode('dark')
//       document.body.style.backgroundColor='#301934'
//       showalert("Dark Mode has been successfully enabled","success")
//       document.title="Textutils - Dark mode"
//     }
//     else
//     {
//       setmode('light')
//        document.body.style.backgroundColor='white'
//        showalert("Light Mode has been successfully enabled","success")
//        document.title="Textutils - Light mode"
//     }
//   }


//   return (
//     <>
//     <browserRouter>
//    {/* <h1>This is me </h1>
//     <div classNameName="App">
//       <header classNameNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Muzammil
//         </a>
//       </header>
//     </div> */}
//       {/* <div id='nav'>
//             <h1 id='logoname'>
//                 {name}
//             </h1> 
//       </div> */}


// <Navbar title="Code with Muzammil" abouttex="Its about us" mode={mode} togglemode={togglemode} />
// <Alert alert={alert}/ >
// {/* <Navbar/> */}
// {/* <Form/> */}
// <div className="container my-3">
// <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//                <Textform headings21="Enter the text for the operation" togglemode={togglemode} showalert={showalert} mode={mode}/>
//           </Route>
//  </Switch>
//   </div>
//    </Router>
//     </>
//   );
// }

// export default App;
