import './moviesCard.css';
import movieImage from '../../../images/movie-image.jpg'
import buttonRemove from '../../../images/button-remove.svg'

function SavedMoviesCard() {
  return (
    <div className="moviesCard">
      <div className="moviesCard__text-content">
        <h2 className="moviesCard__title">В погоне за Бенкси</h2>
        <p className="moviesCard__duration">27 минут</p>
      </div>
      <div className="moviesCard__image-container">
        <img className="moviesCard__image" src={movieImage} alt="Кадр из фильма"></img>
      </div>
      <button className="moviesCard__button" name="button" type="button">
       <img className="moviesCard__button-image" src={buttonRemove} alt="Кнопка удаления"/>
      </button>
    </div>
  );
}

export default SavedMoviesCard;