import getBeatfilmMovies from '../../utils/MoviesApi';

export function searchFilter(searchText) {
  return getBeatfilmMovies()
    .then(cardList => 
      cardList.filter((movie) => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    )
}

export function handleFilterCheckbox(moviesList, checkStatus) {
  if (!checkStatus) {
    return moviesList.filter((movie) => movie.duration > 40);
  } else {
    return moviesList;
  }
}

export function getGridCount() {
  const width = window.innerWidth;
  let gridCount = 1
  if (width > 1000) {
    gridCount = 3;
  }
  if (width > 700 && width <= 1000) {
    gridCount = 2;
  }
  return gridCount
}

export function currentElementCount() {
  const gridCount = getGridCount()
  if (gridCount > 1) {
    return gridCount * 4
  } else {
    return 5
  }
}