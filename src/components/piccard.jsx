import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function ImgCard(props) {
    return(
        <section className="card">
        <Card sx={{
          width:400, 
          padding: 5,
          marginBottom:5, 
          justifyContent: 'center',
          backgroundColor:'#ff5151',
        }}>
            <CardActionArea>
                <CardMedia
                          component="img"
                          height="300"
                          image={props.image} 
                          >
                </CardMedia>
                <CardContent>                     
                    </CardContent>
            </CardActionArea>

            <CardActions>
      </CardActions>

        </Card>
      
        </section>
        
    )
}