// Import necessary modules and components

import {  CssBaseline, Divider, Stack, ThemeProvider, Typography } from "@mui/material";
import Actioncard from "../components/projectcard";
import KompetenceKort from "../components/kompetencer";
import { useTheme } from "styled-components";
import { customTheme } from "../themes/themes.jsx";
import Rina from "../assets/rina.jpg"
import ADHD from "../assets/adhd2.png";
import Nippon from "../assets/modtaget.gif"
import Streetfood from "../assets/streetfood.png"
import Medova from "../assets/pakke.png"
import Flex from "../assets/flexlogo.png"
import Arty from "../assets/front.png"
import Uniq from "../assets/uniq.png"
import Shape from "../assets/shaperina.png"



export default function Hjem() {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
};
         // Hent det aktuelle tema ved hjælp af useTheme hook
     const outerTheme = useTheme();


  return (
            <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
      <main>
        <header className="banner">
          <img src={Shape} alt="Banner" className="banner-in" />
          <img src="../bulb.gif" alt="lightbulb" className="banner-in" />           

        </header>
        <Stack  className="intro" justifyContent={'center'} alignItems={'center'}  >


          <img src={Rina} className="custom-card-media"></img>

        </Stack>


        <KompetenceKort 
        sx={{width:100, margin:40 }}
        />

              <Divider variant="inset" component="ul"  sx={{ margin:6 }}/>
        <Typography variant="h2">Mine Projekter</Typography>
        <Stack 
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'start',
          padding: 2,
          marginBottom:10,
          overflow: 'auto'
        }}
        >


            <Actioncard
                image={Uniq}
                title="Qniq Travels"
                subheader="Web App"
                body=" Uniq Travels er mit første store React projekt for en rejseapp. Jeg er ret stolt af den her, så tjek den endelig ud!"

                onClick={() => handleButtonClick('https://uniq.rinamunk.dk/')}
            />
          <Actioncard
                image={ADHD}
                title="ADHD"
                subheader="Web dokumentar"
                body="Dette projekt er en webdokumentar, der udforsker Bjørns liv, der først fik diagnosen ADHD som voksen. "

                onClick={() => handleButtonClick('https://adhd.rinamunk.dk/')}
            />
            <Actioncard
            image={Nippon}
            title="Nippon"
            subheader="UX/UI projekt"
            body="Målet her var en brugervenlig oplevelse (UX/UI) for et fiktivt måltidskassefirma ved navn Nippon. "

            onClick={() => handleButtonClick('https://nippon.rinamunk.dk/')}
         />
            <Actioncard
            image={Streetfood}
            title="Aarhus Streetfood"
            subheader="Mobile First projekt"
            body="Dette projekt har en 'mobile first' tilgang  til Aarhus Streetfoods online bestillingsplatform."
            onClick={() => handleButtonClick('https://aarhusstreetfood.rinamunk.dk/')}
          />
            <Actioncard
            image={Medova}
            title="Medova Te"
            subheader="Produkt relanceringsprojekt"
            body="Dette projekt involverer en relancering af Medova Te, med fokus på nyt emballagedesign og oprettelse af en dedikeret relanceringsside. "
            onClick={() => handleButtonClick('https://eksamensprojekt.rinamunk.dk/')}
          />
           <Actioncard
            image={Flex}
            title="FlexVirk"
            subheader="Eksamensprojekt Flexvirk"
            body="Projektet Flexvirk repræsenterer en social økonomisk virksomhed, der arbejder på at skabe jobmuligheder for mennesker på kanten af arbejdsmarkedet."
            onClick={() => handleButtonClick('flexpraesentation.rinamunk.dk')}
         />          
          <Actioncard
            image={Arty}
            title="ArtJourney"
            subheader="Mit Første Projekt"
            body="Lavet i HTML og CSS for at skabe en visuelt tiltalende oplevelse. ArtJourney er min hyldest til kunst og kreativitet på nettet."
            onClick={() => handleButtonClick('artjourney.rinamunk.dk')}
          />
        </Stack>
      </main>
    </ThemeProvider>
  );
}
