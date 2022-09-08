import Logo from '../Logo/Logo';
import './auth.css'
import validator  from 'validator';
import { useState } from 'react';
import { fetchPost } from '../../utils/MainApi';

function Register({ inputLabelText, title, buttonText, confirmationText, linkText, errorMessage }) {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('');
  const [labelName, labelEmail, labelPassword] = inputLabelText;
  const isEmailValid = validator.isEmail(email);
  const isStrongPassword = validator.isLength(password, {min: 6, max: undefined});

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchPost( {name, email, password }, 'signup')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <section className="auth">
      <div className="auth__greetings">
        <Logo />
        <h2 className="auth__title">{title}</h2>
      </div>
      <form className="auth__form" name="auth-form" onSubmit={handleSubmit}>
        <fieldset className="auth__form-fieldset">
          <label className="auth__form-label">{labelName}</label>
          <input className="auth__form-input" 
            value={name}
            type="text"
            onChange={handleNameChange}
            required></input>
          <label className="auth__form-label">{labelEmail}</label>
          <input className="auth__form-input auth__form-input_bold" 
            value={email} 
            type="email"
            onChange={handleEmailChange}
            required></input>
          <label className="auth__form-label">{labelPassword}</label>
          <input className={`auth__form-input ${isStrongPassword ? "" : "auth__auth-fail"}`}
            value={password}
            type="password"
            onChange={handlePasswordChange}
            required></input>
        </fieldset>
        <span className={`auth__form-error-message ${isStrongPassword ? "auth__form-error-message_disabled" : "" }`} >{errorMessage}</span>
        <button className={` ${isEmailValid && isStrongPassword ? "auth__form-button" : "auth__form-button auth__form-button_inactive"}`} 
          name="auth-button" 
          type="submit" 
          disabled={!isEmailValid || !isStrongPassword}>{buttonText}</button>
        <div className="auth__text-container">
          <p className="auth__text">{confirmationText}</p>
            <a className="auth__text auth__signup-link" href="/signin" rel="noopener">{linkText}</a>
        </div>
      </form>
    </section>
  );
}

export default Register;
