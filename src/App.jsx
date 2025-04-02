import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Favorites from './pages/Favorites';
import ApartmentDetail from './pages/ApartmentDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/apartment/:id" element={<ApartmentDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App; 