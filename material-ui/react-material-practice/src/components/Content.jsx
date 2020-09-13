import React from "react";
import { Grid } from "@material-ui/core";

import CoffeeCard from "../components/CoffeeCard";
import data from "../data";

const Content = () => {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    return (
      <Grid item xs={12} sm={4} key={coffeeMakerObj.title}>
        <CoffeeCard {...coffeeMakerObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={3}>
      {data.map((coffeeMakerObj) => getCoffeeMakerCard(coffeeMakerObj))}
    </Grid>
  );
};
export default Content;
