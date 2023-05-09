import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Navbar';
import MovieList from './Components/MovieList';
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
