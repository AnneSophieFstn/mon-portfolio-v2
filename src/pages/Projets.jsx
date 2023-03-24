import ballnco from "../assets/projets/ballnco.png";
import crf from "../assets/projets/crf.jpg";
import monportfolio from "../assets/projets/mon-portfolio.png";
import simplon from "../assets/projets/simplon.png";
export default function Projets() {
  const projects = [
    {
      imgUrl: ballnco,
      title: "Ball'n Co",
      description:
        "Application web, mobile et desktop qui permet de réunir les fans du basket.",
      languages: ["Laravel", "React", "React Native", "Électron"],
    },
    {
      imgUrl: crf,
      title: "Croix-Rouge Française de la Réunion",
      description:
        "Refonte complète du site internet officiel de la Croix-Rouge française de la Réunion.",
      languages: ["Wordpress", "Divi"],
      link: "https://reunion.croix-rouge.fr/",
    },
    {
      imgUrl: crf,
      title: "Gestion de parc automobile",
      description:
        "Application web sécurisée qui permet de gérer la gestion et l'attribution des voitures en fonction des etablissements et sur les horaires de travail.",
      languages: ["Laravel", "VueJs"],
    },
    {
      imgUrl: monportfolio,
      title: "Mon portfolio",
      description:
        "Portfolio réaliser dans le but de partager mes projets ainsi que mes compétences.",
      languages: ["React"],
      github: "https://github.com/AnneSophieFstn/mon-portfolio-v2.git",
      link: "",
    },
    {
      imgUrl: simplon,
      title: "Gestion d'attribution d'ordinateur ",
      description:
        "Application sécurisée qui permet de gérer l'attribution des postes informatiques aux visiteurs d'un centre sur les horaires d'ouverture",
      languages: ["Laravel", "VueJs"],
      github: "https://github.com/AnneSophieFstn/gao-laravel-vuejs/tree/master",
    },
  ];
  return (
    <section id="projets" className="projets">
      <div className="container">
        <div className="projets__global">
          <div className="projets__content">
            <h1>PROJETS</h1>
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className={
                    index % 2 === 0
                      ? "projets__card__content"
                      : "projets__card__content reverse"
                  }
                >
                  <div className="card_content_img">
                    <img src={project.imgUrl} alt="ballnco"></img>
                  </div>
                  <div className="card_content_text">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="card_content_stack">
                      {project.languages.map((language, i) => {
                        return <p key={i}>{language}</p>;
                      })}
                    </div>
                    <div className="card_content_links">
                      {project.hasOwnProperty("github") ? (
                        <a href={project.github}>
                          Github <i className="fa-brands fa-github"></i>
                        </a>
                      ) : null}
                      <a href={project.link}>
                        Voir{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
