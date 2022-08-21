import Logo from '../Logo/Logo';
import './auth.css'

function Register({ isAuthorized = false}) {
  return (
    <section className="auth">
      <div className="auth__greetings">
        <Logo />
        <h2 className="auth__title">Добро пожаловать!</h2>
      </div>
      <form className="auth__form" name="auth-form">
        <fieldset className="auth__form-fieldset">
          <label className="auth__form-label">Имя</label>
          <input className="auth__form-input" defaultValue={"Виталий"}type="text"></input>
          <label className="auth__form-label">E-mail</label>
          <input className="auth__form-input auth__form-input_bold" defaultValue={"pochta@yandex.ru"} type="email"></input>
          <label className="auth__form-label">Пароль</label>
          <input className={`auth__form-input ${isAuthorized ? "" : "auth__auth-fail"}`} defaultValue={"12345678901234"} type="password"></input>
          <span className="auth__form-error-message">Что-то пошло не так...</span>
        </fieldset>
        
        <button className="auth__form-button" name="auth-button" type="submit">Зарегистрироваться</button>
        <div className="auth__text-container">
          <p className="auth__text">Уже зарегистрированы?</p>
            <a className="auth__text auth__signup-link" href="/signin" rel="noopener">Войти</a>
        </div>
      </form>
    </section>
  );
}

export default Register;
