import './App.scss';

import MovieList from './components/MovieList';
import SearchInput from './components/SearchInput';

import { mockMovies } from './__fixtures__/movie';

function App() {

  return (
    <div className="App">
      <SearchInput
        className="App__search-input"
        placeholder="Search movie name..."
      />

      <MovieList data={mockMovies} />
    </div>
  );
}

export default App;
