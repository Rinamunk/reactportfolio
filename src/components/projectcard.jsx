import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function Actioncard(props) {
  const { title, subheader, body, image, onClick } = props;
    return(
        <section className="card">
        <Card sx={{
          width:390, 
          padding: 5,
          marginBottom:5, 
          justifyContent: 'center',
          backgroundColor:'#396275',
        }}>
            <CardActionArea>
                <CardMedia
                          component="img"
                          height="300"
                          image={props.image} 
                          >
                </CardMedia>
                <CardContent>
                    <Typography variant="h3" component="div" color={'white'}> 
                      {props.title}
                    </Typography>
                    <Typography variant='h6' color={'secondary'}>
                      {props.subheader}
                    </Typography>
                    <Typography variant="body1" color={'white'}>
                      {props.body}

                    </Typography>
                     
                    </CardContent>
            </CardActionArea>
                                {/* button leading to external sites */}
                       <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClick} // Use the onClick prop here
                    >
                        Se hjemmesiden her!
                    </Button>
            <CardActions>
      </CardActions>

        </Card>
      
        </section>
        
    )
}