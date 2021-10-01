import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Table,
  TableRow,
  TableCell,
} from "@mui/material";
import { Players } from "../../Players";

function IplPlayers() {
  return (
    <div>
      <Grid container spacing={2} justifyContent="space-between">
        {Players.map((player, key, index) => {
          return (
            <div>
              <Card sx={{ maxWidth: 345, padding: "1rem", margin: "1rem" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={player.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {player.Name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Table>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Matches
                  </TableCell>
                  <TableCell align="right">{player.Matches}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Innings
                  </TableCell>
                  <TableCell align="right">{player.Innings}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Runs
                  </TableCell>
                  <TableCell align="right">{player.Runs}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    HighScore
                  </TableCell>
                  <TableCell align="right">{player.HighScore}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Avg
                  </TableCell>
                  <TableCell align="right">{player.Avg}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    StrikeRate
                  </TableCell>
                  <TableCell align="right">{player.StrikeRate}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Catches
                  </TableCell>
                  <TableCell align="right">{player.Catches}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    100s
                  </TableCell>
                  <TableCell align="right">{player.Hundreds}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    50s
                  </TableCell>
                  <TableCell align="right">{player.Fifties}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    4s
                  </TableCell>
                  <TableCell align="right">{player.Fours}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    6s
                  </TableCell>
                  <TableCell align="right">{player.Sixes}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Skills
                  </TableCell>
                  <TableCell align="right">{player.Skills}</TableCell>
                </TableRow>
              </Table>
              <hr />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

export default IplPlayers;
