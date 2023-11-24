import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";
import Card1 from "../Card-1.png";
import Card2 from "../Card-2.png";
import Card3 from "../Card-3.png";
import Card4 from "../Card-4.png";
import Card5 from "../Card-5.png";
import Card6 from "../Card-6.png";
import { useTheme } from "@mui/material/styles";
// MUI Chip Button Start
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
// MUI Chip Button End
// MUI Card Start
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// MUI Card End

function AllData() {
  // MUI Card Start

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // MUI Card End

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const theme = useTheme();

  const [dateList, setDateList] = useState(Data);
  return (
    <div>
      <div>
        <div className="text-center align-items-center fw-bold fs-3 bg-dark text-white mt-2 p-3">
          Select Any One Card
        </div>
        {/* MUI Card Code */}
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="text-center align-items-center col-md-3 m-3">
              {/* sixth Card 6 */}
              <Link to="/card/6" className="text-decoration-none btn p-2">
                <Card sx={{ maxWidth: "auto" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={Card6}
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                    }}
                    alt="Paella dish"
                  />
                  <Chip
                    label="Edit Card"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="m-3 bg-success text-white fw-bold"
                  />
                </Card>
              </Link>
            </div>
            <div className="text-center align-items-center col-md-3 m-3">
              {/* Second Card 2 */}
              <Link to="/card/2" className="text-decoration-none btn p-2">
                <Card sx={{ maxWidth: "auto" }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={Card2}
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                    }}
                    alt="Paella dish"
                  />
                  <Chip
                    label="Edit Card"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="m-3 bg-success text-white fw-bold"
                  />
                </Card>
              </Link>
            </div>
            <div className="text-center align-items-center col-md-3 m-3">
              {/* Third Card 3 */}
              <Link to="/card/3" className="text-decoration-none btn p-2">
                <Card sx={{ maxWidth: "auto" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={Card3}
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                    }}
                    alt="Paella dish"
                  />
                  <Chip
                    label="Edit Card"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="m-3 bg-success text-white fw-bold"
                  />
                </Card>
              </Link>
            </div>
            <div className="text-center align-items-center col-md-3 m-3">
              {/* Fourth Card 4 */}
              <Link to="/card/4" className="text-decoration-none btn p-2">
                <Card sx={{ maxWidth: "auto" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={Card4}
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                    }}
                    alt="Paella dish"
                  />
                  <Chip
                    label="Edit Card"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="m-3 bg-success text-white fw-bold"
                  />
                </Card>
              </Link>
            </div>
            <div className="text-center align-items-center col-md-3 m-3">
              {/* Fiftj Card 5 */}
              <Link to="/card/5" className="text-decoration-none btn p-2">
                <Card sx={{ maxWidth: "auto" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={Card5}
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                    }}
                    alt="Paella dish"
                  />
                  <Chip
                    label="Edit Card"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="m-3 bg-success text-white fw-bold"
                  />
                </Card>
              </Link>
            </div>
            <div className="text-center align-items-center col-md-3 m-3">
              {/* First Card 1 */}
              <Link to="/card/1" className="text-decoration-none btn p-2">
                <Card>
                  <CardMedia
                    component="img"
                    image={Card1}
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                    }}
                    alt="Paella dish"
                  />
                  <Chip
                    label="Edit Card"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="m-3 bg-success text-white fw-bold"
                  />
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllData;
