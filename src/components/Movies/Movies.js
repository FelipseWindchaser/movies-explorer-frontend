import './movies.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { currentElementCount, handleFilterCheckbox, searchFilter, getGridCount } from './moviesUtils';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [elementCount, setElementCount] = useState(currentElementCount());
  const [movieSearch, setMovieSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let resizeTimeout = null;

  useEffect(() => {    
    window.addEventListener('resize', handleResize);
    const localStorageData = localStorage.getItem('movies');
    if (localStorageData) {
      const { searchText, movies, filterCheckbox } = JSON.parse(localStorageData);
      setMoviesList(movies);
      setIsChecked(filterCheckbox);
      setMovieSearch(searchText);
    }
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleResize() {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => setElementCount(currentElementCount), 100) ;
  }


  function handleSearch(searchText) {
    setIsLoading(true)
    searchFilter(searchText)
      .then(res => { 
        setElementCount(currentElementCount)
        setMoviesList(res)
        localStorage.setItem('movies', JSON.stringify({ searchText, movies: res, filterCheckbox: isChecked }));
        setErrorMessage('')
      })
      .catch(err => {
        setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  function handleToggleCheckbox() {
    setIsChecked(!isChecked);
  }

  function resultMovieList() {
    const filteredMoviesList = handleFilterCheckbox(moviesList, isChecked);
    return filteredMoviesList.slice(0, elementCount)
  }

  function showMore() {
    const gridCount = getGridCount()
    setElementCount(elementCount + gridCount)
  }
  
  return (
    <section className="movies">
      <SearchForm buttonText="Поиск" onSearch={handleSearch} movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
      <FilterCheckbox onToggle={handleToggleCheckbox} isChecked={isChecked}/>
      {isLoading 
        ? <Preloader /> 
        : <>
        <MoviesCardList 
          moviesList={resultMovieList()} 
          errorMessage={errorMessage} 
        />
        <div className="movies__button-container">
          <button className={`${handleFilterCheckbox(moviesList, isChecked).slice(elementCount).length !== 0 ? "movies__button movies__button_active" : "movies__button"}`} name="movies-button" type="button" onClick={showMore}>Ещё</button>
        </div>
        </>}
    </section>
  );
}

export default Movies;
