import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';

//nested components
import Header from './components/Header';
import Cake from './components/Cake';
import Gifts from './components/Gifts';

const TEXT = 'Happy Birthday Dad';

const App = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  });

  return (
    <>
      <div className="main">
        <div ref={canvasRef} />
      </div>
//       <Cake />
      <Header />
//       <Gifts />
    </>
  );
};

export default App;

// //import logo from './logo.svg';
// import './App.css';
// //imr
// import React from 'react';
// //imrd

// import ReactDOM from 'react-dom';
// import Header from './components/Header';
// import Clock from './components/Clock';

// import Cake from './components/Cake';
// import Animation from './components/Animation';
// import Gifts from './components/Gifts';

// const App = () => {
//   return <div className="container"></div>;
// };

// ReactDOM.render(
//   <>
//     <React.StrictMode>
//       <Animation />
//     </React.StrictMode>

//     {/* <Header /> */}
//     <Clock />

//     <Cake />
//     <Gifts />
//   </>,
//   document.getElementById('root')
// );

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
