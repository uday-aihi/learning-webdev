import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Welcome to Uday's learning project
//         </p>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
    </Routes>
  );
}

export default App;
