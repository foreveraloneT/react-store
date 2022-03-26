import './App.scss';

import MovieList from './components/MovieList';
import Input from './components/Input';

import { mockMovies } from './__fixtures__/movie';

function App() {
  return (
    <div className="App">
      <Input
        className="App__search-input"
        placeholder="Search movie name..."
      />

      <MovieList data={mockMovies} />
    </div>
  );
}

export default App;
