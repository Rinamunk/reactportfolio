import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import image1 from '../assets/regnbue.jpg';
import image2 from '../assets/monoface.jpg';
import image3 from '../assets/tern2.jpg';
import image4 from '../assets/hug.jpg';
import image5 from '../assets/tree.jpg';
import image6 from '../assets/handsface.jpg';
import image7 from '../assets/back.jpg';
import image8 from '../assets/hand.jpg';
import image9 from '../assets/doinghair.jpg';
import image10 from '../assets/double.jpg';
import image11 from '../assets/shadows.jpg';
import image12 from '../assets/triangle.jpg';
import image13 from '../assets/distorted.jpg';
import image14 from '../assets/womandown.jpg';


export default function MasonryImageList() {
  return (
    <Box sx={{ justifyContent:'center', height: '100vh', alignItems: 'center', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => ( // Use itemData instead of ListItemSecondaryAction
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position='below' title={item.text}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: image1,
    title: 'Regnbue',
    text: 'Sunshine and Rainbows',
  },
  {
    img: image2,
    title: 'Monoface',
    text: 'Afterthought - watercolors and ink'
  },
  {
    img: image3,
    title: 'Tern2',
    text: 'Squares'
  },
  {
    img: image4,
    title: 'Hug',
    text: 'Close'
  },
  {
    img: image5,
    title: 'Tree of Life',
    text: 'Tree of Life'
  },
  {
    img: image6,
    title: 'Handsonface',
    text: 'Support'
  },
  {
    img: image7,
    title: 'Back of Man',
    text: 'Face away'
  },
  {
    img: image8,
    title: 'Hand',
    text: 'Blu'
  },
  {
    img: image9,
    title: 'Doing hair',
    text: 'Respite'
  },
  {
    img: image10,
    title: 'Brothers',
    text: 'Brothers'
  },
  {
    img: image11,
    title: 'Skygger',
    text: 'Shadows cast'
  },
  {
    img: image12,
    title: 'Triangle',
    text: 'Triangle'
  },
  {
    img: image13,
    title: 'distorted',
    text: 'distorted'
  },
  {
    img: image14,
    title: 'womandown',
    text: 'Womandown'
  },

];
