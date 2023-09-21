
export default function Hjem() {

  return (
    <section>
      <header className="banner">
        <img src="../shaperina.png" alt="Banner" id="banner"></img>
        <img src="../bulb.gif" alt="lightbulb"></img>
      </header>
      <main>   

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
      <section id="portfolio">
        <h2>Mine Projekter</h2>

        <div className="portfolio-item">
          <img src="../artjourney.png" alt="Project 1" className="rounded-image"></img>
          <h3>Online Magazine</h3>
          <p>ArtJourney repræsenterer mit første selvstændige projekt inden for min uddannelse og er et online magasin skabt til kunstelskere og kreative sjæle. Dette projekt er en dybdegående udforskning af designaspekterne af webudvikling, med fokus på at skabe en visuelt tiltalende og engagerende platform for kunstrelateret indhold.</p>
          <p>Mit projekt er udviklet ved hjælp af HTML og CSS, hvilket har givet mig mulighed for at udvikle en brugergrænseflade og et design, der er i overensstemmelse med min vision. Den visuelle appel er central for projektets succes, og HTML/CSS giver mig den nødvendige kontrol over layout og æstetik.</p>
          <a href="http://artjourney.rinamunk.dk/">Se projektet her</a>
          <img src="../front.png" alt="Project 1" className="rounded-image"></img>
        </div>




        <div className="portfolio-item">
          <img src="../nipponlogo.png" alt="Project 2" className="rounded-image"></img>
          <h3>Nippon</h3>
          <p>I dette projekt har jeg arbejdet i en gruppe med det fiktive måltidskassefirma Nippon, der er inspireret af det japanske køkken. Vores hovedmål var at designe en brugervenlig online platform ved hjælp af Adobe XD til prototyping og designprocessen. Teknisk implementerede vi platformen ved at bruge HTML5, CSS3 og JavaScript.</p>
          <p>Projektet omfatter også både lo-fi og hi-fi prototyping for at sikre en optimal brugeroplevelse. Vores fokus var at skabe en intuitiv og visuelt tiltalende webplatform, der afspejler Nippons japanske inspiration og gør det nemt for brugerne at tilpasse deres måltidskasser efter deres præferencer og behov.</p>
          <a href="http://nippon.rinamunk.dk/index.html">Se projektet her</a>
          <img src="../modtaget.gif" alt="Project 2" className="rounded-image"></img>

        </div>
        <div className="portfolio-item">
          <img src="../logo.webp" alt="Project 2" className="rounded-image"></img>
          <h3>Aarhus StreetFood</h3>
          <p>I dette projekt skulle min gruppe og jeg lave en responsiv hjemmeside for en rigtig virksomhed med mobile first metoden. </p>
          <p>Vi valgte at fokusere på Aarhus Streetfood, der har implementeret et nyt online bestillingssystem. Selvom systemet var nyttigt, følte vi, at det kunne forbedres. Vi ønskede at gøre hjemmesiden mere farverig og repræsentativ for Aarhus Streetfoods spændende atmosfære. Vi udvidede også informationsstrukturen og tilføjede nye sektioner som "Om Os" og "Events". Dette gjorde hjemmesiden mere alsidig og ikke kun begrænset til bestillinger. Farvekoder og infografikker blev inkluderet for at skabe en sammenhængende visuel oplevelse. Vores projekt lærte os om responsivt webdesign, infografikker og value proposition maps, og vi var fleksible i forhold til tidsplanen og arbejdet hjemmefra. Samlet set blev projektet en lærende oplevelse med en målrettet forbedring af Aarhus Streetfoods online tilstedeværelse.</p>
          <a href="http://aarhusstreetfood.rinamunk.dk/">Se projektet her</a>
          <img src="../streetfood.png" alt="Project 2" className="rounded-image"></img>

        </div>

        <div className="portfolio-item">
          <img src="../adhd.png" alt="Project 2" className="rounded-image"></img>
          <h3>ADHD</h3>
          <p>Hjemmesiden formidler Bjørns personlige historie og livserfaring med ADHD gennem interviews og videoklip. Dette skaber en relaterbar og menneskelig fortælling, som hjælper med at forstå ADHD som mere end bare en diagnose. Projektet fremhæver Bjørns unikke personlighed og måde at tackle udfordringerne på.</p>
          
          <a href="https://adhd.rinamunk.dk/">Se projektet her</a>
          <img src="../adhd2.png" alt="Project 2" className="rounded-image"></img>

        </div>
      </section>
    </section>
  );
}
