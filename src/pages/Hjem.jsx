
export default function Hjem() {

  return (
    <section>

      <main>   
      <header className="banner">
        <img src="../shaperina.png" alt="Banner" id="banner"></img>
        <img src="../bulb.gif" alt="lightbulb"></img>
      </header>
        <div className="heyyouseeso">
          <h2>Velkommen!</h2>       
          <p className="tekst">
            Hey derude, mit navn er Rina, og jeg er så glad for, at du er landet her på min side. Jeg er en 28-årig
            multimediedesign-studerende med en passion for at skabe digitale mesterværker. Lad mig tage dig med på en
            lille rejse gennem, hvem jeg er, og hvad jeg elsker at lave.
          </p>            
          <img src="../rina.jpg" alt="Rina" className="oval-image"></img>

        </div>
      </main>        
      <h2>Mine Projekter</h2>
      <section className="portfolio-container">


        <div className="portfolio-item">
          <img src="../adhd.png" alt="Project 2" className="rounded-image"></img>
          <h3>ADHD</h3>
          <p>Hjemmesiden formidler Bjørns personlige historie og livserfaring med ADHD gennem interviews og videoklip. Dette skaber en relaterbar og menneskelig fortælling, som hjælper med at forstå ADHD som mere end bare en diagnose. Projektet fremhæver Bjørns unikke personlighed og måde at tackle udfordringerne på.</p>
          
          <a href="https://adhd.rinamunk.dk/">Mød Bjørn her</a>
          <img src="../adhd2.png" alt="Project 2" className="rounded-image"></img>

        </div>
        <div className="portfolio-item">
          <img src="../artjourney.png" alt="Project 1" className="rounded-image"></img>
          <h3>Online Magazine</h3>
          <p>ArtJourney repræsenterer mit første selvstændige projekt inden for min uddannelse og er et online magasin skabt til kunstelskere og kreative sjæle. Dette projekt har fokus på at skabe en visuelt tiltalende og engagerende platform for kunstrelateret indhold.</p>
        
          <a href="http://artjourney.rinamunk.dk/">Se mit første projekt</a>
          <img src="../front.png" alt="Project 1" className="rounded-image"></img>
        </div>


        <div className="portfolio-item">
          <img src="../nipponlogo.png" alt="Project 2" className="rounded-image"></img>
          <h3>Nippon</h3>
          <p>I dette projekt har jeg arbejdet i en gruppe med det fiktive måltidskassefirma Nippon, der er inspireret af det japanske køkken. Vores hovedmål var at designe en brugervenlig online platform ved hjælp af Adobe XD til prototyping og designprocessen. Teknisk implementerede vi platformen ved at bruge HTML5, CSS3 og JavaScript.</p>
         
          <a href="http://nippon.rinamunk.dk/index.html">Se japanske måltidskasser</a>
          <img src="../modtaget.gif" alt="Project 2" className="rounded-image"></img>

        </div>
        <div className="portfolio-item">
          <img src="../logo.webp" alt="Project 2" className="rounded-image"></img>
          <h3>Aarhus StreetFood</h3>
          <p>Målet her var en responsiv hjemmeside for en rigtig virksomhed med mobile first metoden. </p>
          <p>Vores projekt inkorporerede responsivt webdesign, infografikker og value proposition maps for at give en målrettet forbedring af Aarhus Streetfoods online tilstedeværelse.</p>
          <a href="http://aarhusstreetfood.rinamunk.dk/">Se projektet her</a>
          <img src="../streetfood.png" alt="Project 2" className="rounded-image"></img>

        </div>

      </section>
    </section>
  );
}
