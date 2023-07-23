import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import CarDetail from './pages/CarDetails';
import SearchCar from './pages/SearchCar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/searchcar' element={<SearchCar />} />
        <Route path='/detailcar/:id' element={<CarDetail/> } />
    </Routes>
  );
}

export default App;
