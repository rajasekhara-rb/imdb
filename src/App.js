// import logo from './logo.svg';
// import './App.css';

// import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movie/Movie';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='/movies/:type' element={<MovieList/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
