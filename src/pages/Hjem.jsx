import { Stack, Typography } from "@mui/material";
import Actioncard from "../components/projectcard";
import KompetenceKort from "../components/kompetencer";




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
          <Stack direction="row" spacing={2}>
            <img src="../src/assets/html.png" alt="html" className="kompetence"></img>
            <img src="../src/assets/css.png" alt="css" className="kompetence"></img>
            <img src="../src/assets/js.svg" alt="js" className="kompetence"></img>

          </Stack>
  

        </div>

                <Typography variant="h2">Mine Projekter</Typography>


        <Actioncard />

      </main>        

      </section>
  );
}
