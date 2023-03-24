export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <h2>CONTACT</h2>
          <p>
            N'hésitez pas à me contacter pour discuter de projets futurs ou pour
            toute question supplémentaire.
          </p>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <i className="fa-solid fa-map-location-dot"></i>
              </span>
              <div className="contact__info">
                <h3>Localisation</h3>
                <p>Saint-Benoit, La Réunion</p>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
                <i className="fa-solid fa-envelope-open-text"></i>
              </span>
              <div className="contact__info">
                <h3>Email</h3>
                <a href="mailto:annesophie.faustino@gmail.com">
                  annesophie.faustino@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
