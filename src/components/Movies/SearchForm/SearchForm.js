import './searchForm.css'

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form-container">
        <input className="searchForm__input" placeholder="Фильм" type="text"></input>
        <button className="searchForm__button" name="form-button">Поиск</button>
      </form>
    </section>
  );
}

export default SearchForm;
