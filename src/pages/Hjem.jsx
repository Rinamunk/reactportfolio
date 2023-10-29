// Import necessary modules and components

import { CssBaseline, Divider, Stack, ThemeProvider, Typography } from "@mui/material";
import Actioncard from "../components/projectcard";
import KompetenceKort from "../components/kompetencer";
import { useTheme } from "styled-components";
import { customTheme } from "../themes/themes";
import Rina from "../assets/rina.jpg"
import ADHD from "../assets/adhd2.png"
import Nippon from "../assets/modtaget.gif"
import Streetfood from "../assets/streetfood.png"
import Medova from "../assets/logomedova.png"
import Flex from "../assets/flexlogo.png"
import Arty from "../assets/front.png"

export default function Hjem() {
         // Hent det aktuelle tema ved hjælp af useTheme hook
     const outerTheme = useTheme();

  return (
            <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
      <main>
        <header className="banner">
          <img src="../shaperina.png" alt="Banner" id="banner" />
          <img src="../bulb.gif" alt="lightbulb" />
        </header>


        <div className="heyyouseeso">        
        <Typography variant="h1">Velkommen!</Typography>
          <p className="tekst">
            Hey derude, mit navn er Rina, og jeg er så glad for, at du er landet her på min side. Jeg er en 28-årig
            multimediedesign-studerende med en passion for at skabe digitale mesterværker. Lad mig tage dig med på en
            lille rejse gennem, hvem jeg er, og hvad jeg elsker at lave.
          </p>       
          <img src={Rina} className="profile"/>


        </div>
        <KompetenceKort 
        sx={{width:100, margin:40 }}
        />
              <Divider variant="inset" component="ul"  sx={{ margin:6 }}/>
        <Typography variant="h2">Mine Projekter</Typography>
        <Stack direction="row" spacing={2} display={"flex"} flexWrap={"wrap"}>

          <Actioncard
            image={ADHD}
            title="ADHD"
            subheader="Web dokumentar"
            body="Dette projekt er en webdokumentar, der udforsker Bjørns liv, der først fik diagnosen ADHD som voksen. Fokus er på at levere en spændende oplevelse og give seerne et dybdegående indblik i, hvordan det er at leve med ADHD som voksen. Projektet er en fortælling om udfordringer, triumfer og den unikke rejse, som Bjørn har oplevet gennem livet med ADHD."
          />
            <Actioncard
            image={Nippon}
            title="Nippon"
            subheader="UX/UI projekt"
            body="Dette projekt fokuserer på at skabe en brugervenlig og intuitiv brugeroplevelse (UX/UI) for et fiktivt måltidskassefirma ved navn Nippon. Projektet inkorporerer også en smule JavaScript for at forbedre funktionaliteten. Målet er at levere en effektiv digital platform, der gør det let for brugere at bestille måltidskasser fra Nippon."
          />
            <Actioncard
            image={Streetfood}
            title="Aarhus Streetfood"
            subheader="Mobile First projekt"
            body="Dette projekt har en 'mobile first' tilgang og sigter mod at skabe en visuelt tiltalende opdatering til Aarhus Streetfoods online bestillingsplatform. Hovedfokus er at forbedre brugeroplevelsen på mobile enheder og sikre, at brugerne nemt kan bestille deres yndlingsretter fra Aarhus Streetfood via deres smartphones og tablets."
          />
            <Actioncard
            image={Medova}
            title="Medova Te"
            subheader="Produkt relanceringsprojekt"
            body="Dette projekt involverer en omfattende relancering af Medova Te, med fokus på nyt emballagedesign og oprettelse af en dedikeret relanceringsside. Projektet repræsenterer mit første eksamensprojekt og er en bestræbelse på at forny og forbedre Medova Te-brandet, herunder dets visuelle identitet og online tilstedeværelse."
          />
           <Actioncard
            image={Flex}
            title="FlexVirk"
            subheader="Eksamensprojekt Flexvirk"
            body="Projektet Flexvirk repræsenterer en social økonomisk virksomhed, der arbejder på at skabe jobmuligheder for mennesker på kanten af arbejdsmarkedet. Hjemmesiden, der er udviklet, inkorporerer avanceret JavaScript-funktionalitet for at levere en mere intuitiv brugeroplevelse. Målet er at hjælpe både virksomheden og samfundet ved at tilbyde støtte og muligheder for dem, der har brug for det mest."
          />          
          <Actioncard
            image={Arty}
            title="ArtJourney"
            subheader="Mit Første Projekt"
            body="Lavet i HTML og CSS for at skabe en visuelt tiltalende oplevelse. ArtJourney er min hyldest til kunst og kreativitet på nettet."
          />
        </Stack>
      </main>
    </ThemeProvider>
  );
}
