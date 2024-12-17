import React, { useEffect, useRef } from "react";
import "./_homepage.sass";
import picture from "../../assets/images/picture.jpg";
import ButtonsAnime from "../Button/buttons_anime";
import Caroussel from '../Caroussel/caroussel';
import Position from '../Position/position';
import Contact from '../Contact/Contact';

function Homepage({ theme }) {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    const bars = skillsRef.current.querySelectorAll('.bar_stat, .bar_stat-2, .bar_stat-3, .bar_stat-4');
    bars.forEach((bar) => observer.observe(bar));

    return () => {
      bars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);


  return (
    <div className={`Homepage ${theme}`} id="profil">
      <div className="container-presentation" >
        <div className="Title">
          <h1>Développeur Full stack junior</h1>
        </div>

        <div className="presentation">
          <div className="profile-picture">
            <div className="style-profil"></div>
            <img src={picture} alt="" />
          </div>

          <div className="about">
            <div className="corner-1"></div>
            <div className="corner-2"></div>
            <div className="corner-3"></div>
            <div className="corner-4"></div>

            <div className="text-about">
              <div className="Subtitle-container">
                <h2 className="Subtitle"> à propos de moi </h2>
                <ButtonsAnime />
              </div>

              <p>
                Hello! Je m'appelle Thalisson et je suis un développeur web full
                stack junior passionné et ambitieux. Toujours en quête de
                nouvelles connaissances et d'opportunités pour évoluer.
              </p>
              <br />
              <p>
                Je suis impatient à l'idée de collaborer avec des équipes
                dynamiques et de contribuer à des projets passionnants qui me
                permettront de mettre en pratique mes compétences tout en
                continuant à apprendre et à grandir en tant que développeur.
              </p>
            </div>
          </div>
        </div>
        {/* c'est ici que je continue mon portfolio -------------------------------------------------*/}
      </div>

      <div id="competences" className="container-skills" ref={skillsRef}>
        <div className="Title">
          <h1>Compétence</h1>
        </div>

        <Caroussel className={`theme`} />

        <div className="container_compet">
          <div className="compet">
            <div className='Title_compet'>
              <h2>Front-end</h2>
              <ButtonsAnime />
            </div>

            <div className='stat_compet'>
              <h3>Html</h3>
              <div className='bar_stat'></div>
            </div>

            <div className='stat_compet'>
              <h3>css/scss/sass</h3>
              <div className='bar_stat'></div>
            </div>

            <div className='stat_compet'>
              <h3>Bootstrap</h3>
              <div className='bar_stat-2'></div>
            </div>

            <div className='stat_compet'>
              <h3>Javascript</h3>
              <div className='bar_stat'></div>
            </div>

            <div className='stat_compet'>
              <h3>React</h3>
              <div className='bar_stat'></div>
            </div>

            <div className='Title_compet'>
              <h2>back-end</h2>
              <ButtonsAnime />
            </div>

            <div className='stat_compet'>
              <h3>Node js</h3>
              <div className='bar_stat-3'></div>
            </div>

            <div className='stat_compet'>
              <h3>My SQl</h3>
              <div className='bar_stat-3'></div>
            </div>

            <div className='stat_compet'>
              <h3>Python</h3>
              <div className='bar_stat-4'></div>
            </div>
          </div>
          <div className="cv-zone">
            <div className="text-skills">
              <p>
              Je suis un développeur passionné et polyvalent, ayant une solide base en développement front-end et back-end.
              Je maîtrise le front-end pour créer des structures web robustes et sémantiques, ainsi que CSS, SCSS et SASS pour une stylisation avancée et maintenable des sites web.
              Je crée des fonctionnalités dynamiques et interactives en JavaScript et des applications web réactives et efficaces avec React.
              </p>
<br />
              <p>
              En ce qui concerne le back-end, j'utilise Node.js pour développer des serveurs rapides et évolutifs.
              Je gère des bases de données relationnelles en utilisant MySQL/SQL.
              Et je prévilégie Python pour le développement de mes application.
              </p>
<br />
              <p>
              Vous pouvez télécharger <b>mon CV</b> pour en savoir plus sur mon parcours en tant que développeur.
              </p>
            </div>

            <div className='button_cv'>
              <a href="/cv.pdf" download>
                <button>Télécharger cv</button>
              </a>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- */}
        <Position/>
        <Contact/>
      </div>
    </div>
  );
}

export default Homepage;
