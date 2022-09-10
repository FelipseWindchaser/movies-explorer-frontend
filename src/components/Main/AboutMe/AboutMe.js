import './aboutMe.css';
import studentPhoto from '../../../images/student-photo.jpg'

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__profile">
        <div className="aboutMe__text-container">
          <p className ="aboutMe__name">Виталий</p>
          <p className ="aboutMe__short-description">Фронтенд-разработчик, 30 лет</p>
          <p className ="aboutMe__full-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
          У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
          После того, как прошёл курс по веб-разработке, 
          начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="aboutMe__links">
            <a className="aboutMe__link" href="/" target="_blank" rel="noopener">Facebook</a>
            <a className="aboutMe__link" href="/" target="_blank" rel="noopener">Github</a>
          </div>
        </div>
        <img className="aboutMe__image" src={studentPhoto} alt="Логотип" />
      </div>
    </section>
  );
}

export default AboutMe;