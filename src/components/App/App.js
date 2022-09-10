import './app.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { checkToken, fetchGet } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppContext } from '../../contexts/AppContext';
import { SavedMovieContex } from '../../contexts/SavedMovieContex'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupTooltip from '../PopupTooltip/PopupTooltip';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [popupTooltipContent, setPopupTooltipContent] = useState({});

  useEffect(() => {
    authorize();
    if (isLoggedIn) {
      fetchGet('movies').then((res) => {
        setSavedMoviesList(res)
      })
    }
  }, [isLoggedIn])

  function authorize() {
    checkToken()
      .then(res => {
        setIsLoggedIn(true)
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 600);
      })
  }
  function handleLogout() {
    fetchGet('signout')
    .then(res => {
      console.log(res)
      setIsLoggedIn(false);
      setCurrentUser({});
      localStorage.clear();
    })
    .catch(err => setPopupTooltipContent({
      isSuccessful: false,
      message: err.message
    }));
  }

  return (
    isLoading ? <Preloader /> :
    <>
      <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider value={isLoggedIn}>
      <SavedMovieContex.Provider value={{savedMoviesList, setSavedMoviesList}}>
        
        <div className="app">
          <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
          />
          <Route path="/movies" element={
            <>
              <Header />
              <ProtectedRoute redirectTo="/">
                <Movies setPopupTooltipContent={setPopupTooltipContent} />
              </ProtectedRoute>
              <Footer />
            </>
          }
          />
          <Route path="/saved-movies" element={
            <>
              <Header />
              <ProtectedRoute redirectTo="/">
                <SavedMovies />
              </ProtectedRoute>
              <Footer />
            </>
          }
          />
          <Route path="/profile" element={
            <>
              <Header />
              <ProtectedRoute redirectTo="/">
                <Profile 
                  nameLabel='Имя'
                  emailLabel='E-mail'
                  editButtonText='Редактировать'
                  logoutButtonText='Выйти из аккаунта'
                  setCurrentUser={setCurrentUser}
                  onClickLogout={handleLogout}
                  setPopupTooltipContent={setPopupTooltipContent}
                />
              </ProtectedRoute>
            </>
          }
          />
          <Route path="/signup" element={
            !isLoggedIn ? <Register 
              inputLabelText={['Имя', 'E-mail', 'Пароль']} 
              title='Добро пожаловать!' 
              buttonText='Зарегистрироваться' 
              confirmationText='Уже зарегистрированы?'
              linkText='Войти'
              errorMessage='Минимальная длина пароля: 6 символов.'
              setIsLoggedIn={setIsLoggedIn}
              setPopupTooltipContent={setPopupTooltipContent}
            /> : <Navigate to="/" />
          }
          />
          <Route path="/signin" element={
            !isLoggedIn ? <Login 
              inputLabelText={['E-mail', 'Пароль']} 
              title={'Рады видеть!'}
              buttonText='Войти' 
              confirmationText='Ещё не зарегистрированы?'
              linkText='Регистрация'
              errorMessage='Минимальная длина пароля: 6 символов.'
              setIsLoggedIn={setIsLoggedIn}
              setPopupTooltipContent={setPopupTooltipContent}
            /> : <Navigate to="/" />
          }
          />
          <Route path="*" element={
            <PageNotFound />
          }
          />
          </Routes>
          <PopupTooltip 
            popupContent={popupTooltipContent}
            setPopupTooltipContent={setPopupTooltipContent} />
        </div>
      </SavedMovieContex.Provider>
      </AppContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
