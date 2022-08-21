import './searchForm.css'

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form-container">
        <input className="searchForm__input" placeholder="Фильм" type="text" required></input>
        <button className="searchForm__button" name="form-button" type="submit">Поиск</button>
      </form>
    </section>
  );
}

export default SearchForm;
