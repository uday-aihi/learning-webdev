import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Navbar from "./components/navbar";

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
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </div>
  );
}

export default App;
