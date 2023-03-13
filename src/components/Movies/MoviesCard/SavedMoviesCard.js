import { useContext } from 'react';
import './moviesCard.css';
import buttonRemove from '../../../images/button-remove.svg'
import { fetchDelete } from '../../../utils/MainApi';
import { SavedMovieContex } from '../../../contexts/SavedMovieContex';


function SavedMoviesCard({ item }) {
  const { savedMoviesList, setSavedMoviesList } = useContext(SavedMovieContex);
  
  function handleBtnClick() {
    fetchDelete(`movies/${item._id}`)
      .then(res => {
        console.log(res)
        const newSavedMovieList = savedMoviesList.filter((movie) => movie.movieId !== item.movieId)
        setSavedMoviesList(newSavedMovieList)
      })
  }

  return (
    <div className="moviesCard">
      <a href={item.trailerLink} className="moviesCard__text-content" target="_blank" rel="noreferrer">
        <h2 className="moviesCard__title">{item.nameRU}</h2>
        <p className="moviesCard__duration">{item.duration} минут</p>
      </a>
      <div className="moviesCard__image-container">
        <a href={item.trailerLink} target="_blank" rel="noreferrer">
          <img className="moviesCard__image" src={item.image} alt={`Кадр из фильма ${item.nameRU}`}></img>
        </a>
      </div>
      <button className="moviesCard__button" name="button" type="button">
       <img className="moviesCard__button-image" src={buttonRemove} alt="Кнопка удаления" onClick={handleBtnClick} />
      </button>
    </div>
  );
}

export default SavedMoviesCard;