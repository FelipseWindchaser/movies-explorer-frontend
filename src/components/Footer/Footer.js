import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__content">
        <p className="footer__text">&copy; 2020</p>
        <div className="footer__listContainer">
          <ul className="footer__links">
            <li className="footer__link">Яндекс.Практикум</li>
            <li className="footer__link">Github</li>
            <li className="footer__link">Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;