import './moviesCardList.css';
import SavedMoviesCard from '../MoviesCard/SavedMoviesCard';

function SavedMoviesCardList({ moviesList }) {
  return (
    moviesList.length === 0
      ? 
      <p className="moviesCardList__error-message">Нет сохраненных фильмов</p>
      :
    <section className="moviesCardList moviesCardList_padding_bottom">
      {moviesList.map((element) => <SavedMoviesCard key={element.movieId} item={element} />)}
    </section>
  );
}

export default SavedMoviesCardList;