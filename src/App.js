import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/search" element={<><h1 className='flex justify-center'>Search Page</h1></>} />
            <Route path="/watch" element={<><h1>Watch Page</h1></>} />
            <Route path="/" element={<Recommended />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;