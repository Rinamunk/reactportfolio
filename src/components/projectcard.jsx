import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MainBtn } from './button';


export default function Actioncard(props) {
    return(
        <section className="card">
        <Card sx={{width:345, margin:3, marginBottom:5}}>
            <CardActionArea>
                <CardMedia
                          component="img"
                          height="300"
                          image={props.image} 
                          >
                </CardMedia>
                <CardContent>
                    <Typography variant="h3" component="div"> 
                      {props.title}
                    </Typography>
                    <Typography variant='h6'>
                      {props.subheader}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {props.body}

                    </Typography>
                     
                    </CardContent>
            </CardActionArea>
            <CardActions>
      </CardActions>

        </Card>
      
        </section>
        
    )
}