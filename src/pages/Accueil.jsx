import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Hand_img from "../assets/hand.png";

import html from "../assets/logo/html.png";
import css from "../assets/logo/css.png";
import js from "../assets/logo/javascript.png";
import php from "../assets/logo/php-logo.png";
import laravel from "../assets/logo/laravel.png";
import react from "../assets/logo/react.png";
import vuejs from "../assets/logo/vuejs.png";
import wordpress from "../assets/logo/wordpress.png";

export default function Accueil() {
  const languages = [html, css, js, php, laravel, react, vuejs, wordpress];

  return (
    <section id="home" className="home">
      <div className="home__global_content container">
        <div className="home__block">
          <div className="home__img__text">
            <div className="home__info">
              <h1>Développeuse web</h1>
              <img src={Hand_img} alt="waving_hand"></img>
              <p>
                Bonjour, je suis Anne-Sophie Faustino. <br />
                Jeune développeuse web habitant sur l'île de la Réunion. 🌋🌴☀️
              </p>
              <span>
                <a href="https://www.linkedin.com/in/annesophie-faustino/">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://github.com/AnneSophieFstn">
                  <GitHubIcon fontSize="large" />
                </a>
              </span>
            </div>
            <div className="home__img"></div>
          </div>

          <div className="skills">
            <h3>Stack technique </h3>
            <div className="logos">
              <ul>
                {languages.map((language, index) => {
                  return (
                    <li key={index}>
                      <img src={language} alt="img_language"></img>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
