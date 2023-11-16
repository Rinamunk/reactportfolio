import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import JS from "../assets/js.svg"
import CSS from "../assets/css.png"
import HTML from "../assets/html.png"
import Figma from "../assets/figma.png"
import React from "../assets/react.png"
import Photo from "../assets/ps.png"

export default function KompetenceKort() {
    return(
        <section className="card"            >
            <Typography variant="h5" lineHeight={3}
                            sx={{ 
                                color: customTheme => customTheme.palette.secondary.main 
                              }}
            >
                Softwarekompetencer
            </Typography>
            <Divider></Divider>
        <Card sx={{maxWidth:150, 
            margin:1,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='50'
                image={HTML}
                alt='Html'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",}}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='50'
                image={CSS}
                alt='CSS'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='50'
                image={JS}
                alt='Javascript'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='50'
                image={Figma}
                alt='Figma'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='50'
                image={React}
                alt='React'
                />
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:150, margin:1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}>
            <CardActionArea>
                <CardMedia 
                component='img'
                height='50'
                image={Photo}
                alt='PhotoShop'
                />
            </CardActionArea>
        </Card>
      
      
      
        </section>
        
    )
}