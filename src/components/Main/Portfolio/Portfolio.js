import './portfolio.css';
import arrow from '../../../images/arrow-image.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <p className="portfolio__text">Статичный сайт</p>
          <a className="portfolio__link" href="/" target="_blank" rel="noopener">
            <img className="portfolio_arrow-image" src={arrow} alt="Стрелка вверх"/>
          </a>
        </li>
        <li className="portfolio__element">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a className="portfolio__link" href="/" target="_blank" rel="noopener">
            <img className="portfolio_arrow-image" src={arrow} alt="Стрелка вверх"/>
          </a>
        </li>
        <li className="portfolio__element">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a className="portfolio__link" href="/" target="_blank" rel="noopener">
            <img className="portfolio_arrow-image" src={arrow} alt="Стрелка вверх"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;