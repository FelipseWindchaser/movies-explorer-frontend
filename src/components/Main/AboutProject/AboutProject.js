import './aboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__textContent">
        <div className="aboutProject__textContainer">
          <p className ="aboutProject__subtitle">Дипломный проект включал 5 этапов</p>
          <p className ="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, 
          добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__textContainer">
          <p className ="aboutProject__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className ="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, 
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__progress-row-grid">
        <div className="aboutProject__progress-row-flex">
          <p className="aboutProject__backend-terms">1 неделя</p>
          <p className="aboutProject__caption">Back-end</p>
        </div>
        <div className="aboutProject__progress-row-flex">
          <p className="aboutProject__frontend-terms">4 недели</p>
          <p className="aboutProject__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;