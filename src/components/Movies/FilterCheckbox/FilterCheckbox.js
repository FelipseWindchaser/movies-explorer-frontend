import './filterCheckbox.css'

function FilterCheckbox() {
  return (
    <section className="filterCheckbox">
      <label className="filterCheckbox__switch">
        <input className="filterCheckbox__input" type="checkbox"></input>
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__text">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;