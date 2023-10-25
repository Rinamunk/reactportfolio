import MasonryImageList from "../components/imglist";


export default function Kunst(){
    return(
        <section>
            <header className="banner">
                <img src="../shaperina.png"></img>
                <img src="../paint.gif"></img>
            </header>   
                <div className="portfolio-item">
                <h3>Kunst som frirum</h3>
                <p>Min hobby er en verden af farver, former og kreativ udfoldelse. Jeg maler med akvarel, oliefarver og mixed media, og jeg lader mig inspirere af alt omkring mig. For mig er kunst en frisættende oplevelse, hvor jeg tror på at give slip på alle forventninger og normer. Det er et frirum, hvor jeg kan lege frit og lade min fantasi flyde.</p>
                    </div>
        <MasonryImageList/>
                    
        <div className="portfolio-item">
          <h3></h3>
          <p>I kunstverdenen er der ofte en tendens til at stræbe efter perfektion og følge de "rigtige" metoder. Men jeg tror på at bevare den frihed, vi havde som børn, til at gøre, hvad der falder os ind. Det er netop i denne legende tilgang til kunst, at jeg finder noget nyt og spændende. Det handler ikke om at opnå det perfekte resultat, men om at udforske og udtrykke mig selv.</p>
            <p> Jeg elsker at udfordre mig selv og min kreativitet ved at deltage i årlige begivenheder som "swordtember". Hver september kaster jeg mig ud i at tegne en række forskellige sværd. Dette er ikke kun for at bringe variation ind i min kunst, men også for at træne de kreative muskler, som man ikke altid får brugt i sin daglige praksis.</p>
          <p>For mig handler min hobby om at finde glæde i kunsten, udforske min kreativitet og inspirere andre til at tænke uden for boksen. Det er et evigt eventyr, hvor kun fantasien sætter grænser, og hvor jeg kan finde skønhed i selv de mest usandsynlige steder.</p>
    <img src="../kunstplan.jpg" alt="Project 2" className="rounded-image"></img>
        </div>
        
        </section>
    )
}