import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


export default function KompetenceKort() {
    return(
        <section className="card">
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image='./src/assets/css.png'
                alt='Nippon'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image='./src/assets/html.png'
                alt='Nippon'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='65'
                image='./src/assets/js.svg'
                alt='Nippon'
                />
            </CardActionArea>
        </Card>
      
      
        </section>
        
    )
}