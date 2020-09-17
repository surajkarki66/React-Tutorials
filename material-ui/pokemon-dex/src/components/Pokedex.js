import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import mockData from "../mockData";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
});

const toFirstCharUppercase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export default function PokeDex(props) {
  const { history } = props;
  const [pokemonData, setPokemonData] = useState(mockData);
  const classes = useStyles();

  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusecontent.com/PokeAPI/sprites/${pokemonId}`;
    return (
      <Grid item xs={12} sm={4} keys={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${pokemonId}. ${toFirstCharUppercase(
              name
            )}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </React.Fragment>
  );
}
