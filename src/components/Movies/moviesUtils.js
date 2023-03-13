import { gridMultiplier, maxWidth, minWidth, shortMovieDuration } from '../../utils/constants';
import getBeatfilmMovies from '../../utils/MoviesApi';

export function searchFilter(searchText) {
  return getBeatfilmMovies()
    .then(cardList => 
      cardList.filter((movie) => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    )
}


export function handleFilterCheckbox(moviesList, checkStatus) {
  if (!checkStatus) {
    return moviesList.filter((movie) => movie.duration > shortMovieDuration);
  } else {
    return moviesList;
  }
}

export function getGridCount() {
  const width = window.innerWidth;
  let gridCount = 1;
  if (width > maxWidth) {
    gridCount = 3;
  }
  if (width > minWidth && width <= maxWidth) {
    gridCount = 2;
  }
  return gridCount;
}

export function currentElementCount() {
  const gridCount = getGridCount()
  if (gridCount > 1) {
    return gridCount * gridMultiplier;
  } else {
    return 5;
  }
}