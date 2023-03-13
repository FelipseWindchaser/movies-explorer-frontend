import './moviesCardList.css';


function SavedMoviesCardList({ Component, moviesList }) {
  return (
    <section className="moviesCardList moviesCardList_padding_bottom">
      {moviesList.map((element, index) => {
        return <Component key={index} isSaved={element.isSaved} />
      })}
    </section>
  );
}

export default SavedMoviesCardList;