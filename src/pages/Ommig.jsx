import { useEffect, useState } from "react";
import Content from "../components/content";

export default function Ommig(){
    const [posts, setposts] = useState([])

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
        <section>


            <header className="banner">
                <img src="../shaperina.png"></img>
                <img src="../face.gif"></img>
            </header>



                <article className="heyyouseeso">
            	     <p className="tekst">Jeg er en kreativ sjæl, der altid har haft en dyb forbindelse til verden af design og teknologi. Min empati og min nysgerrighed har altid drevet mig til at skabe brugeroplevelser, der er både smukke og meningsfulde. Jeg elsker at fordybe mig i brugernes behov og skabe løsninger, der virkelig gør en forskel.</p>
                     <img src="../motivation.jpg" alt="Rina" className="oval-image"></img>
                </article>               
                <aside className="posts">
              {posts.map(post => (
                <Content key={post.id} post={post}/>
            ))}
            
            </aside>
                <article className="heyyouseeso">
                        <p className="tekst">Lige nu befinder jeg mig midt i min uddannelse som multimediedesigner. Jeg er på udkig efter en spændende praktikplads, der kan starte i 2024. Det er her, jeg håber at kunne implementere alt det, jeg har lært, og fortsætte med at vokse som designer. Jeg tror på, at de bedste læreoplevelser sker i det virkelige liv, og jeg er ivrig efter at tage fat på udfordringerne.</p>
                        <img src="../sommerrina.jpg" alt="Rina" className="oval-image"></img>
                        <img src="../vinterrina.jpg" alt="Rina" className="oval-image"></img>
                </article> 
                <article className="heyyouseeso">
                        <p className="tekst">Hvad kan jeg tilbyde? Godt spørgsmål! Jeg er ikke kun en designer, der er drevet af æstetik, men også af teknologi. Jeg har en solid base i frontend-udvikling og arbejder konstant på at forbedre mine færdigheder inden for JavaScript, React, og endda Tailwind CSS. Jeg tror på, at en designer med tekniske kompetencer kan skabe de mest imponerende og brugervenlige løsninger.
                    Så, hvis du leder efter en kreativ, empatisk, dreven og lidt sjov multimediedesigner, så er jeg din praktikant. Jeg elsker at se det store billede og samtidig sørge for, at hver lille detalje er på plads. Lad os sammen skabe noget fantastisk!
                    Tak fordi du besøgte min side, og jeg ser frem til at arbejde sammen med dig i fremtiden!</p>
                    <img src="../birdy.gif" alt="Rina" className="oval-image"></img>
                    <img src="../shapy9.png" alt="Rina" className="oval-image"></img>
                    </article> 
      </section>
    )
}