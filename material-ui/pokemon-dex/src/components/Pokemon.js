import React from "react";

export default function PokeMon(props) {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  return <div>{`This is the PokeMon page of id #${pokemonId}`}</div>;
}
