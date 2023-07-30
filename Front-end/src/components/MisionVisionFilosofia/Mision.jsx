import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Mision,Vision,Filo.css'
import Mision from "./images/Mision.jpg"
import Vision from "./images/Vision.jpg"
import Filosofia from "./images/Filosofia.jpg"


export default function ImgMediaCard() {
  return (
    <div className='MVVCard-container'>
      <Card className='MVVCard' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Mision"
          height="140"
          image={Mision}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mision
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card className='MVVCard' sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Vision"
            height="140"
            image={Vision}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vision
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>

      <Card className='MVVCard' sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Filosofia"
            height="140"
            image={Filosofia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Filosofia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>


    </div>
  );
}





