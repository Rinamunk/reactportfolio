import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import JS from "../assets/js.svg"
import CSS from "../assets/css.png"
import HTML from "../assets/html.png"
import Figma from "../assets/figma.png"

export default function KompetenceKort() {
    return(
        <section className="card" display={"flex"} flexWrap={"wrap"}>
            <Typography variant="h5" lineHeight={3}>
                Softwarekompetencer
            </Typography>
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image={HTML}
                alt='Html'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image={CSS}
                alt='CSS'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image={JS}
                alt='Javascript'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image={Figma}
                alt='Figma'
                />
            </CardActionArea>
        </Card>
      
      
        </section>
        
    )
}