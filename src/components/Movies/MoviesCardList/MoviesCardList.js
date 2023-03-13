import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, errorMessage, setPopupTooltipContent }) {
  return (
    moviesList.length === 0
      ? 
      <p className="moviesCardList__error-message">{errorMessage}</p>
      :
    <section className="moviesCardList">
      {moviesList.map((element) => {
        return <MoviesCard key={element.id} item={element} setPopupTooltipContent={setPopupTooltipContent} />
      })}
    </section>
  );
}

export default MoviesCardList;