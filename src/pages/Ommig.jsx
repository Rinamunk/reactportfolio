import { useEffect, useState } from "react";
import Content from "../components/content";
import { ThemeProvider } from "styled-components";
import { CssBaseline, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { customTheme } from "../themes/themes";

import Shape from "../assets/shaperina.png"
import Rina from "../assets/vinterrina.jpg"
import motivation from "../assets/motivation.jpg"
import somRina from "../assets/sommerrina.jpg"
import birdy from "../assets/birdy.gif"



export default function Ommig(){
    const [posts, setposts] = useState([])
    // Hent det aktuelle tema ved hjælp af useTheme hook
    const outerTheme = useTheme();

    useEffect(() => {
        async function getPosts() {
            const url=" https://rinamunk.dk/wp-json/wp/v2/posts?_embed&categories=8"
            const response = await fetch(url);
            const data = await response.json();
            setposts(data);
        }
        getPosts();
    },[]);

    
  
    return(
        <ThemeProvider theme={customTheme(outerTheme)}>
        <CssBaseline enableColorScheme />
 

            <header className="banner">
            <img src={Shape} alt="Banner" className="banner-in" />
                <img src="../face.gif" className="banner-in"></img>
            </header>

            <Stack display={"flex"}   justifyContent={'center'} alignItems={'center'}   paddingLeft={5} paddingRight={5}>
          <Typography variant="h3" marginBottom={10}
                        sx={{ 
                            color: customTheme => customTheme.palette.primary.main 
                            
                          }}
                          >Hejsa, her kan du læse lidt om mig &#10084;</Typography>

          <Typography variant="body1" 
                        sx={{ 
                            color: customTheme => customTheme.palette.primary.main 
                          }}
                          >Jeg er en kreativ sjæl, der altid har haft en dyb forbindelse til verden af design og teknologi. 
                     Min empati og min nysgerrighed har altid drevet mig til at skabe brugeroplevelser, der er både smukke og meningsfulde. 
                     Jeg elsker at fordybe mig i brugernes behov og skabe løsninger, der virkelig gør en forskel.
          </Typography>          
          <Divider variant="inset" component="ul"  sx={{ margin:1 }}/>
          <Typography variant="body1" marginBottom={10}
                        sx={{ 
                            color: customTheme => customTheme.palette.primary.main 
                          }}
                       >Lige nu befinder jeg mig midt i min uddannelse som multimediedesigner. 
                        Jeg er på udkig efter en spændende praktikplads, der kan starte i 2024. 
                        Det er her, jeg håber at kunne implementere alt det, jeg har lært, og fortsætte med at vokse som designer. 
                        Jeg tror på, at de bedste læreoplevelser sker i det virkelige liv, og jeg er ivrig efter at tage fat på udfordringerne.
          </Typography>
          <Divider variant="inset" component="ul"  sx={{ margin:1 }}/>
          <Typography variant="body1" marginBottom={10}
                        sx={{ 
                            color: customTheme => customTheme.palette.primary.main 
                          }}
                          >Hvad kan jeg tilbyde? Godt spørgsmål! Jeg er ikke kun en designer, der er drevet af æstetik, men også af teknologi. 
                         Jeg har en solid base i frontend-udvikling og arbejder konstant på at forbedre mine færdigheder inden for JavaScript, React, og endda Tailwind CSS. 
                         Jeg tror på, at en designer med tekniske kompetencer kan skabe de mest imponerende og brugervenlige løsninger.
                          Så, hvis du leder efter en kreativ, empatisk, dreven og lidt sjov multimediedesigner, så er jeg din praktikant. 
                         Jeg elsker at se det store billede og samtidig sørge for, at hver lille detalje er på plads. Lad os sammen skabe noget fantastisk!
                         Tak fordi du besøgte min side, og jeg ser frem til at arbejde sammen med dig i fremtiden!
                    </Typography>

       
        </Stack>

          


      </ThemeProvider>
    )
}