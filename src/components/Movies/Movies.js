import './movies.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { currentElementCount, handleFilterCheckbox, searchFilter, getGridCount } from './moviesUtils';
import Preloader from '../Preloader/Preloader';
import getBeatfilmMovies from '../../utils/MoviesApi';


function Movies({ setPopupTooltipContent }) {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [elementCount, setElementCount] = useState(currentElementCount());
  const [movieSearch, setMovieSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentMoviesList, setCurrentMoviesList] = useState([])
  const showMoreActiveClassName = `${handleFilterCheckbox(currentMoviesList, isChecked).slice(elementCount).length !== 0 ? "movies__button movies__button_active" : "movies__button"}`

  let resizeTimeout = null;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    const localStorageData = localStorage.getItem('movies');
    if (localStorageData) {
      const { searchText, movies, searchMoviesResult, filterCheckbox } = JSON.parse(localStorageData);
      setCurrentMoviesList(searchMoviesResult);
      setMoviesList(movies)
      setIsChecked(filterCheckbox);
      setMovieSearch(searchText);
      setIsLoading(false)
    } else {
      getBeatfilmMovies()
        .then((res) => {
          setMoviesList(res)
        })
        .catch((err) => {
          console.log(err)
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => setTimeout(() => setIsLoading(false), 300))
    }
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleResize() {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => setElementCount(currentElementCount), 100) ;
  }


  function handleSearch(searchText) {
    const searchMoviesResult = moviesList.filter((movie) => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    setCurrentMoviesList(searchMoviesResult)
    localStorage.setItem('movies', JSON.stringify({ searchText, movies: moviesList, searchMoviesResult, filterCheckbox: isChecked }));
    if (!errorMessage) {
      setErrorMessage('Ничего не найдено')
    }
  }

  function handleToggleCheckbox() {
    setIsChecked(!isChecked);
  }

  function resultMovieList() {
    const filteredMoviesList = handleFilterCheckbox(currentMoviesList, isChecked);
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
          setPopupTooltipContent={setPopupTooltipContent}
        />
        <div className="movies__button-container">
          <button className={showMoreActiveClassName} name="movies-button" type="button" onClick={showMore}>Ещё</button>
        </div>
        </>}
    </section>
  );
}

export default Movies;
