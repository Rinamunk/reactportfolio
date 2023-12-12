import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Collapse, Stack, styled } from '@mui/material';


export default function Actioncard(props) {
  const StyledButton = styled(Button)`
    ${({ theme }) => `
      cursor: pointer;
      background-color: ${theme.palette.primary.main};
      transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
      &:hover {
        background-color: ${theme.palette.secondary.light};
        transform: scale(1.3);
      }
    `}
  `;


  const { onClick } = props;

  return (
    <Stack
    sx={{
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }}
    >
      <Card
        sx={{
          width: 400,
          height: 700,
          paddingBottom:2,
          margin: 2,
          borderRadius: 15,
          
          
        }}
      >
        <CardActionArea

        >
          <CardMedia 
          component="img" 
          sx={{
            width:400,
            padding:2,
            
          }}
      
          image={props.image}>
    
          </CardMedia>
          <CardContent >
            <Typography variant="h3" component="div" color={'primary'}>
              {props.title}
            </Typography>
            <Typography variant="h6" color={'secondary'}>
              {props.subheader}
            </Typography>
            <Typography variant="body1" color={'primary'}>
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>



        <CardActions
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-end'
          
        }}
        >        
          <StyledButton variant="outlined" color="secondary" onClick={onClick}         
        sx={{
          borderRadius:15,
          justifyContent: 'flex-end'
        }}
        >
          Se hjemmesiden her!
        </StyledButton>
        </CardActions>

      </Card>
    </Stack>
  );
}
