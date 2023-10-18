import React, { useState } from 'react';

function PortfolioSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
        title: 'ADHD',
        description: 'Hjemmesiden formidler Bjørns personlige historie og livserfaring med ADHD gennem interviews og videoklip...',
        link: 'https://adhd.rinamunk.dk/',
        imageSrc: '../adhd2.png',
      },
      {
        title: 'Online Magazine',
        description: 'ArtJourney repræsenterer mit første selvstændige projekt inden for min uddannelse og er et online magasin skabt til kunstelskere og kreative sjæle...',
        link: 'http://artjourney.rinamunk.dk/',
        imageSrc: '../front.png',
      },
      {
          title: 'Nippon',
          description: 'I dette projekt har jeg arbejdet i en gruppe med det fiktive måltidskassefirma Nippon, der er inspireret af det japanske køkken. Vores hovedmål var at designe en brugervenlig online platform ved hjælp af Adobe XD til prototyping og designprocessen. Teknisk implementerede vi platformen ved at bruge HTML5, CSS3 og JavaScript.',
          link: 'http://nippon.rinamunk.dk/',
          imageSrc: '../modtaget.gif',
        },
        {
          title: 'Aarhus Streetfood',
          description: 'Målet her var en responsiv hjemmeside for en rigtig virksomhed med mobile first metoden',
          link: "http://aarhusstreetfood.rinamunk.dk/",
          imageSrc: '../streetfood.png',
        },
        {
          title: 'Medova Te Relaunch',
          description: 'Eksamensprojekt',
          link: "http://eksamensprojekt.rinamunk.dk/",
          imageSrc: '../teinfogra.png',
        },
        {
          title: 'Flex-virk',
          description: 'Flex der virker',
          link: "http://flexpraesentation.rinamunk.dk/",
          imageSrc: '../flexsite.png',
        },
  ];

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="portfolio-slider">
      <h2>Mine Projekter</h2>
      <div className="slider-container">
        <button onClick={prevSlide}>Forrige</button>
        <button onClick={nextSlide}>Næste</button>
        <div className="portfolio-item">          
        <h3>{projects[currentImageIndex].title}</h3>
          <p>{projects[currentImageIndex].description}</p>
          <a href={projects[currentImageIndex].link}>          <img src={projects[currentImageIndex].imageSrc} alt={`Project ${currentImageIndex + 1}`} className="rounded-image" /></a>


        </div>

      </div>
    </div>
  );
}

export default PortfolioSlider;
