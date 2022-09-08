import { useState, useContext } from 'react';
import './moviesCard.css';
import buttonActive from '../../../images/button-active.svg'
import { SavedMovieContex } from '../../../contexts/SavedMovieContex';
import { fetchDelete, fetchPost } from '../../../utils/MainApi';

function MoviesCard({ item }) {
  const { savedMoviesList, setSavedMoviesList } = useContext(SavedMovieContex);
  const [isSaved, setIsSaved] = useState(
    savedMoviesList.some((movie) => movie.movieId === item.id)
  )

  function handleBtnClick() {
    if (isSaved) {
      fetchDelete(`movies/${savedMoviesList.find((movie) => movie.movieId === item.id)._id}`)
        .then(res => {
          console.log(res)
          const newSavedMovieList = savedMoviesList.filter((movie) => movie.movieId !== item.id)
          setSavedMoviesList(newSavedMovieList)
          setIsSaved(false)
        })
    } else {
      fetchPost({
        country: item.country || 'Нет данных',
        director: item.director || 'Нет данных', 
        duration: item.duration, 
        year: item.year || 'Нет данных', 
        description: item.description || 'Нет данных', 
        image: `https://api.nomoreparties.co${item.image.url}` || 'Нет данных', 
        trailerLink:  item.trailerLink || 'Нет данных', 
        thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}` || 'Нет данных', 
        nameRU: item.nameRU || 'Нет данных', 
        nameEN: item.nameEN || 'Нет данных', 
        movieId: item.id, 
      }, 'movies')
        .then(res => {
          setSavedMoviesList([...savedMoviesList, res])
          setIsSaved(true)
        })
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className="moviesCard">
      <a href={item.trailerLink} className="moviesCard__text-content" target="_blank" rel="noreferrer">
        <h2 className="moviesCard__title">{item.nameRU}</h2>
        <p className="moviesCard__duration">{item.duration} минут</p>
      </a>
      <div className="moviesCard__image-container">
        <a  href={item.trailerLink} target="_blank" rel="noreferrer">
          <img className="moviesCard__image" src={`https://api.nomoreparties.co${item.image.url}`} alt={`Кадр из фильма ${item.nameRU}`}></img>
        </a>
        <button className={`moviesCard__button ${isSaved ? "moviesCard__button_active" : "" }`} name="button" type="button" onClick={handleBtnClick}>
        {isSaved ?
       <img className="moviesCard__button-image" src={buttonActive} alt="Активная кнопка"/>
      : "Сохранить" }
      </button>
      </div>

    </div>
  );
}

export default MoviesCard;