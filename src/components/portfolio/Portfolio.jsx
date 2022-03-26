import React from "react";
import "./portfolio.css";
import Port1 from "../../assets/portfolio1.jpg";
import Port2 from "../../assets/portfolio2.jpg";
import Port3 from "../../assets/portfolio3.jpg";
import Port4 from "../../assets/portfolio4.jpg";
import Port5 from "../../assets/portfolio5.png";
import Port6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Port1,
    title: 'Condominium Rental App Animation Concept',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/17754567-Condominium-Rental-App-Animation-Concept'
  },
  {
    id: 2,
    image: Port2,
    title: 'Condominium Rental App Animation Concept',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/17754567-Condominium-Rental-App-Animation-Concept'
  },
  {
    id: 3,
    image: Port3,
    title: 'Condominium Rental App Animation Concept',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/17754567-Condominium-Rental-App-Animation-Concept'
  },
  {
    id: 4,
    image: Port4,
    title: 'Condominium Rental App Animation Concept',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/17754567-Condominium-Rental-App-Animation-Concept'
  },
  {
    id: 5,
    image: Port5,
    title: 'Condominium Rental App Animation Concept',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/17754567-Condominium-Rental-App-Animation-Concept'
  },
  {
    id: 6,
    image: Port6,
    title: 'Condominium Rental App Animation Concept',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/17754567-Condominium-Rental-App-Animation-Concept'
  }

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id}  className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} rel="noreferrer" target="_blank" className="btn">Github</a>
              <a href={demo}target="_blank" rel="noreferrer"className="btn btn-primary ">Live-Demo</a>
              </div>
            </article>
            )
          })
}

      </div>
    </section>
  );
};

export default Portfolio;
