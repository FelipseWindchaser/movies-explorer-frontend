import './searchForm.css'

function SearchForm({buttonText, onSearch, movieSearch, setMovieSearch}) {

  function handleMovieSearch(e) {
    setMovieSearch(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(movieSearch)
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form-container" onSubmit={handleSubmit}>
        <input className="searchForm__input" 
          placeholder="Фильм"
          type="text" onChange={handleMovieSearch}
          value={movieSearch}
          onInvalid={e => e.target.setCustomValidity('Нужно ввести ключевое слово')}
          onInput={e => e.target.setCustomValidity('')}
          required>
        </input>
        <button className="searchForm__button" name="form-button" type="submit">{buttonText}</button>
      </form>
    </section>
  );
}

export default SearchForm;
