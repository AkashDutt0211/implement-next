import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const CardDetails = dynamic(() => import('./components/CardDetails'));

const ImagesListing = () => {
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://dummyapi.online/api/pokemon");
      response = await response.json();
      setPokemonList(response);
    }
    fetchMyAPI();
  }, []);
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <Grid container spacing={2}>
      {pokemonList?.map((pokemon) => (
        <Grid key={pokemon?.id} item xs={6}>
          <Card variant="outlined">
            <CardDetails pokemon={pokemon} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImagesListing;
