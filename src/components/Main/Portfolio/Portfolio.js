import './portfolio.css';
import arrow from '../../../images/arrow-image.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a className="portfolio__link" href="https://github.com/FelipseWindchaser/how-to-learn" target="_blank" rel=" noreferrer noopener">
            <p className="portfolio__text">Статичный сайт</p>
            <img className="portfolio_arrow-image" src={arrow} alt="Стрелка вверх"/>
          </a>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link" href="https://github.com/FelipseWindchaser/russian-travel" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__text">Адаптивный сайт</p>
            <img className="portfolio_arrow-image" src={arrow} alt="Стрелка вверх"/>
          </a>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link" href="https://github.com/FelipseWindchaser/react-mesto-auth" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__text">Одностраничное приложение</p>
            <img className="portfolio_arrow-image" src={arrow} alt="Стрелка вверх"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;