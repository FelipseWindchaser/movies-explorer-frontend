import './moviesCardList.css';


function MoviesCardList({ Component, moviesList }) {
  return (
    <section className="moviesCardList">
      {moviesList.map((element, index) => {
        return <Component key={index} isSaved={element.isSaved} />
      })}
    </section>
  );
}

export default MoviesCardList;