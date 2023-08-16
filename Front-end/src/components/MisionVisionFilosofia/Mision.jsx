import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Mision,Vision,Filo.css";
import Mision from "./images/Mision.jpg";
import Vision from "./images/Vision.jpg";
import Filosofia from "./images/Filosofia.jpg";
import { Fade } from "react-awesome-reveal";

export default function ImgMediaCard() {
  return (
    <>
      <div className="separatorcontainer">
        <div className="separator"></div>
      </div>
      <div className="MVVCard-container mx-auto" style={{ width: "90%" }}>
        <Fade direction="left">
          <Card className="MVVCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Mision"
              height="140"
              image={Mision}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Misión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Promover procesos educativos integrales e inclusivos para
                garantizar el derecho universal a una educación de calidad como
                bien público, dirigido a los sectores más vulnerables, excluidos
                y empobrecidos para la construcción de sistemas sociales justos
                y democráticos.
              </Typography>
            </CardContent>
          </Card>

          <Card className="MVVCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Vision"
              height="140"
              image={Vision}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Visión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ser un referente de educación popular integral, inclusiva y de
                calidad, con incidencia en políticas nacionales e
                internacionales sostenibles que, de la mano con las comunidades,
                aporta a la construcción de sociedades equitativas y solidarias.
              </Typography>
            </CardContent>
          </Card>

          <Card className="MVVCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Filosofia"
              height="140"
              image={Filosofia}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Valores
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Calidad, inclusión, respeto, equidad y transparencia
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </div>
    </>
  );
}
