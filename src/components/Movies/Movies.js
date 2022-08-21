import './movies.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import SearchForm from './SearchForm/SearchForm';
import { moviesList } from '../../utils/constants';


function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList Component={MoviesCard} moviesList={moviesList} />
      <div className="movies__button-container">
        <button className="movies__button" name="movies-button" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default Movies;
