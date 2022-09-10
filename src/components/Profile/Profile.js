import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { fetchPatch } from '../../utils/MainApi';
import './profile.css'

function Profile({  nameLabel, emailLabel, editButtonText, logoutButtonText, setCurrentUser, onClickLogout, setPopupTooltipContent }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const isDisabled = disableButton();

  function disableButton() {
    if (name !== currentUser.name || email !== currentUser.email) {
      return false;
    } else {
      return true;
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
      fetchPatch( {name, email}, 'users/me')
      .then(res => {
        setCurrentUser(res);
        setPopupTooltipContent({
          isSuccessful: true,
          message: "Данные успешно обновлены"
        })
      })
      .catch(err => setPopupTooltipContent({
        isSuccessful: false,
        message: err.message
        }))
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" name="profile-form" onSubmit={handleSubmit}>
        <fieldset className="profile__text-container">
          <label className="profile__text profile__text_bold">{nameLabel}</label>
          <input className="profile__text profile__input" 
            value={name} 
            type="text"
            onChange={handleNameChange}
          ></input>
        </fieldset>
        <fieldset className="profile__text-container">
          <label className="profile__text profile__text_bold">{emailLabel}</label>
          <input className="profile__text profile__input" 
            value={email} 
            type="email"
            onChange={handleEmailChange}
          ></input>
        </fieldset>
        <button className="profile__edit-button" name="submit-button" type="submit" disabled={isDisabled}>{editButtonText}</button>
      </form>
      <Link to="/" className="profile__signout" onClick={onClickLogout}>{logoutButtonText}</Link>
    </section>
  );
}

export default Profile;
