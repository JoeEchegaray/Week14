import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';
import ReviewForm from './Components/ReviewForm';
import MovieList from './Components/MovieList';
import Movie from './Components/Movies';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <MovieList />
    </div>
  );
}

export default App;
