import './filterCheckbox.css'

function FilterCheckbox({ onToggle, isChecked }) {

  return (
    <section className="filterCheckbox">
      <label className="filterCheckbox__switch">
        <input className="filterCheckbox__input" type="checkbox" checked={isChecked} onChange={onToggle}></input>
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__text">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;