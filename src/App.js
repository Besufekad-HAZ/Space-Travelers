import './App.css';
import { Routes, Route } from 'react-router-dom';
import RocketsList from './component/RocketsList';
import MyProfile from './component/myprofile';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketsList />} />
        {/* <Route exact path="Missions" element={<Missions />} /> */}
        <Route exact path="myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
