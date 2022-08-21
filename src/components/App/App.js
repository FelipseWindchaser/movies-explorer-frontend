import './app.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { Route, Routes } from "react-router-dom";
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import PageNotFound from '../PageNotFound.js/PageNotFound';
import Preloader from '../Preloader/Preloader';


function App() {
  return (
    <div className="app">
      {/* <Header /> Раскомментировать при реализации функционала */}
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
          <Header isAuthorized={true} />
          <Movies />
          <Footer />
        </>
      }
      />
      <Route path="/saved-movies" element={
        <>
          <Header isAuthorized={true} />
          <SavedMovies />
          <Footer />
        </>
      }
      />
      <Route path="/profile" element={
        <>
        <Header isAuthorized={true}/>
          <Profile />
        </>
        
      }
      />
      <Route path="/signup" element={
        <Register />
      }
      />
      <Route path="/signin" element={
        <Login />
      }
      />
      <Route
        path="/preloader" element={
          <Preloader/>
        }
      />
      <Route path="*" element={
        <PageNotFound />
      }
      />
      </Routes>
    </div>
  );
}

export default App;
