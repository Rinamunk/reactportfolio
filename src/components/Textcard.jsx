import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea'; // Import CardActionArea separately
import CardActions from '@mui/material/CardActions'; // Import CardActions separately

export default function Textcard(props) {
  const { title, subheader, body, image, onClick } = props;
  return (
    <section className="card">
      <Card sx={{
        padding: 5,
        marginBottom: 5,
        maxWidth: 1400,
        justifyContent: 'center',
        backgroundColor: '#ff5151',
        textAlign: 'center',
        display: 'flex',
        flex: 1,

      }}>
        <CardActionArea>
          <CardContent
                        sx={{
                          justifyContent: 'center',
                          flex: 1,
                        }}
          >
            <Typography variant="h3" component="div" color={'white'}>
              {props.title}
            </Typography>
            <Typography variant='h6' color={'primary'}>
              {props.subheader}
            </Typography>
            <CardMedia
              component="img"
              image={props.image}
              className="custom-card-media"
              sx={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
            >
            </CardMedia>
            <Typography variant="body1" color={'white'}
            >
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* You can add buttons or other actions here */}
        </CardActions>
      </Card>
    </section>
  )
}
