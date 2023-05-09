import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Navbar';
import ReviewForm from './Components/ReviewForm';
import MovieList from './Components/MovieList';
import Movie from './Components/Movies';
import './App.css'


function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <MovieList />
    </div>
  );
}

export default App;
