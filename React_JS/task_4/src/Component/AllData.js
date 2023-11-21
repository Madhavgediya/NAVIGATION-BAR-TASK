import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Card1 from "./Card1";

function AllData() {
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
            {dateList &&
              dateList.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="text-center align-items-center col-md-3 m-3"
                    >
                      <Card sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography component="div" variant="h5">
                              {item.id}
                            </Typography>
                          </CardContent>
                          <Link
                            to={`/user/` + item.id}
                            className="text-decoration-none btn btn-success p-2 m-4"
                          >
                            View
                          </Link>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: "auto" }}
                          image={item.image}
                          alt="Live from space album cover"
                        />
                      </Card>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllData;
