import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


export default function Actioncard() {
    return(
        <section className="card">
        <Card sx={{maxWidth:345, margin:5}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='140'
                image='./src/assets/modtaget.gif'
                alt='Nippon'
                />
                <CardContent>
                    <Typography variant="h5" component="div"> Nippon - Ux Projekt</Typography>
                    <Typography variant="body1" color="text.secondary">I dette projekt har jeg arbejdet i en gruppe med det fiktive måltidskassefirma Nippon, der er inspireret af det japanske køkken. Vores hovedmål var at designe en brugervenlig online platform ved hjælp af Adobe XD til prototyping og designprocessen. Teknisk implementerede vi platformen ved at bruge HTML5, CSS3 og JavaScript.'</Typography>
            
                    </CardContent>
            </CardActionArea>
            <CardActions>
        <Button variant="outlined" size="small" color="primary" href="http://nippon.rinamunk.dk/">
          Gå til hjemmesiden her 
        </Button>
      </CardActions>
        </Card>
      
        </section>
        
    )
}