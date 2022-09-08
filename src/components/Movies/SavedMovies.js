import { useEffect, useState, useContext } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import SearchForm from './SearchForm/SearchForm';
import SavedMoviesCardList from './MoviesCardList/SavedMoviesCardList';
import { currentElementCount, handleFilterCheckbox } from './moviesUtils';
import { SavedMovieContex } from '../../contexts/SavedMovieContex';

function SavedMovies() {
  const { savedMoviesList } = useContext(SavedMovieContex);
  const [currentMoviesList, setCurrentMoviesList] = useState([])
  const [isChecked, setIsChecked] = useState(true);
  const [elementCount, setElementCount] = useState(currentElementCount());
  const [movieSearch, setMovieSearch] = useState('');
  let resizeTimeout = null;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentMoviesList(savedMoviesList)
  },[savedMoviesList])

  function handleResize() {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => setElementCount(currentElementCount), 100) ;
  }

  function handleSearch(searchText) {
    setCurrentMoviesList(savedMoviesList.filter((movie) => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1))
  }

  function handleToggleCheckbox() {
    setIsChecked(!isChecked);
  }

  function resultMovieList() {
    const filteredMoviesList = handleFilterCheckbox(currentMoviesList, isChecked);
    return filteredMoviesList.slice(0, elementCount)
  }

  return (
    <section className="savedMovies">
      <SearchForm buttonText="Поиск" onSearch={handleSearch} movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
      <FilterCheckbox onToggle={handleToggleCheckbox} isChecked={isChecked} />
      <SavedMoviesCardList
        moviesList={resultMovieList()} 
      />
    </section>
  );
}

export default SavedMovies;