import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, errorMessage }) {
  return (
    moviesList.length === 0
      ? 
      <p className="moviesCardList__error-message">{errorMessage ? errorMessage : 'Ничего не найдено'}</p>
      :
    <section className="moviesCardList">
      {moviesList.map((element) => {
        return <MoviesCard key={element.id} item={element} />
      })}
    </section>
  );
}

export default MoviesCardList;