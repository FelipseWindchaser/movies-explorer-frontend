import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import SavedMoviesCard from './MoviesCard/SavedMoviesCard';
import SearchForm from './SearchForm/SearchForm';
import { savedMoviesList } from '../../utils/constants';
import SavedMoviesCardList from './MoviesCardList/SavedMoviesCardList';

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <FilterCheckbox />
      <SavedMoviesCardList Component={SavedMoviesCard} moviesList={savedMoviesList} />
    </section>
  );
}

export default SavedMovies;