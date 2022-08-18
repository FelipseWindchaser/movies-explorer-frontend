import './profile.css'

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" name="profile-form">
        <fieldset className="profile__text-container">
          <label className="profile__text profile__text_bold">Имя</label>
          <input className="profile__text profile__input" defaultValue={"Виталий"} type="text"></input>
        </fieldset>
        <fieldset className="profile__text-container">
          <label className="profile__text profile__text_bold">E-mail</label>
          <input className="profile__text profile__input" defaultValue={"pochta@yandex.ru"} type="email"></input>
        </fieldset>
        <button className="profile__edit-button" name="submit-button">Редактировать</button>
      </form>
      <a href="/" className="profile__signout">Выйти из аккаунта</a>
    </section>
  );
}

export default Profile;
