async function getBeatfilmMovies() {
  let response = await fetch('https://api.nomoreparties.co/beatfilm-movies')
  let data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw data;
  } 
}
export default getBeatfilmMovies;
