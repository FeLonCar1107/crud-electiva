import './App.scss';
// import { Alert, Card, DatePicker } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import projectRoutes from './config/routes';
import Movies from './pages/movies';
import AddMovies from './components/AddMovies';

function App() {
  // const prueba_fecha = (date, dateString) => console.log(date, dateString);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/crud" element={<Movies></Movies>}/>
      <Route path="/add-movie" element={<AddMovies />}/>
          <Route path="/update-movie/:movieId" element={<AddMovies />}/>
        {projectRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component/>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
  }

export default App;
