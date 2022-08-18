import './moviesCard.css';
import movieImage from '../../../images/movie-image.jpg'
import buttonActive from '../../../images/button-active.svg'

function MoviesCard({ isSaved }) {
  return (
    <div className="moviesCard">
      <div className="moviesCard__text-content">
        <h2 className="moviesCard__title">В погоне за Бенкси</h2>
        <p className="moviesCard__duration">27 минут</p>
      </div>
      <div className="moviesCard__image-container">
        <img className="moviesCard__image" src={movieImage} alt="Кадр из фильма"></img>
      </div>
      <button className={`moviesCard__button ${isSaved ? "moviesCard__button_active" : "" }`} name="button">
        {isSaved ?
       <img className="moviesCard__button-image" src={buttonActive} alt="Активная кнопка"/>
      : "Сохранить" }
      </button>
    </div>
  );
}

export default MoviesCard;