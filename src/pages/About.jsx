import Me from "../assets/volcan-reunion.jpg";
import CV from "../assets/CV_Anne-Sophie_Faustino_dev.pdf";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__img">
            <img src={Me} alt="me" />
          </div>
          <div className="about__text">
            <h2>À propos de moi</h2>
            <p>
              Jeune développeuse web passionnée par les technologies et la
              création d'application métiers modernes et interactifs.
            </p>
            <p>
              Spécialisée dans les technologies telles que HTML, CSS,
              JavaScript, PHP et les frameworks tels que Laravel, React et
              VueJs.
            </p>
            <p>
              J'aime travailler en équipe et je suis toujours à la recherche de
              nouveaux défis pour améliorer mes compétences et mon expérience.
            </p>
            {/* <p>
              Mon portfolio est un aperçu de mes projets passés et présents.
            </p> */}

            <button>
              <a href={CV} download="CV_FAUSTINO_ANNESOPHIE_DEV">
                MON CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
