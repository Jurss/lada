import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './component/NavBar';
import SignUpModal from './component/SignUpModal';
import SignInModal from './component/SignInModal'
import Private from './pages/private/Private';
import PrivateHome from './pages/private/privateHome/PrivateHome';


function App() {
  return (
    <div className="App">
        <SignUpModal />
        <SignInModal />

        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Private/>}>
                <Route path='/home/home/*' element={<PrivateHome />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
