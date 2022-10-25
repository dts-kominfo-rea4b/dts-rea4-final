import { Box, Button, CardMedia, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


import { useState } from "react";

import * as React from "react";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      id={movie.id}
      sx={{
        display: "flex",
        width: 400,
        margin: 5,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {" "}
            <b>Year :</b>
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <Rating
              name="read-only"
              precision={0.1}
              value={movie.vote_average / 2}
              max={5}
              readOnly
            />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
          </Typography>

          <div>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                mt: 4,
              }}
            >
              Detail
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Sinopsis
              </BootstrapDialogTitle>
              <DialogContent dividers>
                {/* <CardMedia
                  id={movie.id}
                  component="video"
                  image={BASE_VIDEO_URL}
                  title={movie.title}
                  controls
                /> */}
                <Typography gutterBottom sx={{ textAlign: "justify" }}>
                  {movie.overview}
                </Typography>
              </DialogContent>
            </BootstrapDialog>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieCard;
