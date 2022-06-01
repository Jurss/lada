import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './component/NavBar';
import SignUpModal from './component/SignUpModal';

function App() {
  return (
    <div className="App">
        <SignUpModal />
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
