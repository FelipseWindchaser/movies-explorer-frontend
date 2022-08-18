import Logo from '../Logo/Logo';
import './auth.css'

function Login() {
  return (
    <section className="auth">
      <div className="auth__greetings">
        <Logo />
        <h2 className="auth__title">Рады видеть!</h2>
      </div>
      <form className="auth__form" name="auth-form">
        <label className="auth__form-label">E-mail</label>
        <input className="auth__form-input auth__form-input_bold" defaultValue={"pochta@yandex.ru"} type="email"></input>
        <label className="auth__form-label">Пароль</label>
        <input className="auth__form-input" type="password"></input>
        <button className="auth__form-button auth__form-button_two-inputs" name="auth-button">Войти</button>
        <div className="auth__text-container">
          <p className="auth__text">Ещё не зарегистрированы?</p>
            <a className="auth__text auth__signup-link" href="/signup" rel="noopener">Регистрация</a>
        </div>
      </form>
    </section>
  );
}

export default Login;
