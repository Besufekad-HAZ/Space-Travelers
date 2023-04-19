import './App.css';
import { Routes, Route } from 'react-router-dom';
import RocketsList from './component/RocketsList';
import MyProfile from './component/myprofile';
import Navbar from './component/Navbar';
import Missions from './pages/missions-page';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsList />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
