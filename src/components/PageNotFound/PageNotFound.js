import './pageNotFound.css'

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound__content">
        <div className="pageNotFound__text-container">
          <h2 className="pageNotFound__title">404</h2>
          <p className="pageNotFound__subtitle">Страница не найдена</p>
        </div>
        <a href="/" className="pageNotFound__link">Назад</a>
      </div>
      
    </div>
  );
}

export default PageNotFound;