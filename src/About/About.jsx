import React from "react";
import "../About/About.css";
const About = () => {
  return (
    <>
      <h1>About</h1>
      <video controls>
        <source src="los.mp4" type="video/mp4" />
      </video>
      <p>
        Los Pollos Hermanos (Spanish pronunciation: [los ˈpo.ʝos eɾ.ˈma.nos];
        Spanish for The Chicken Brothers) is a fictional fast food restaurant
        chain specializing in chicken that was featured in the television series
        Breaking Bad and its spin-off Better Call Saul. In the fictional
        universe of Breaking Bad, Los Pollos Hermanos is featured as a front
        organization for Gus Fring's methamphetamine manufacturing and
        distribution operation, but is also highly regarded by the general
        public of the Southwest as a regional chain on par with KFC. The set
        used for the restaurant's Albuquerque location in the show was at a
        Twisters branch in South Valley, New Mexico, and Twisters has seen an
        increase in business attributed to being associated with Breaking Bad.
        Due to the show's popularity, Los Pollos Hermanos has appeared on
        numerous occasions as a real-life pop-up restaurant. The real life
        restaurant serves the same menu items as in the show
      </p>
      <footer>
        @anandhu-as{" "}
        <a href="https://github.com/anandhu-as?tab=overview&from=2023-06-01&to=2023-06-03">
          <i class="fa fa-github"></i>
        </a>
      </footer>
    </>
  );
};

export default About;
