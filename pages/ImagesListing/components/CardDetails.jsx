import { CardContent } from "@mui/material";
import Image from 'next/image'

const CardDetails = (props) => {
  const { pokemon } = props
  return (
    <CardContent>
      <h1>{pokemon?.pokemon}</h1>
      <h2>{pokemon?.type}</h2>
      <Image
        src={pokemon?.image_url}
        width={500}
        height={500}
        alt="Picture of pokemon"
        priority={pokemon.id < 4}
      />
    </CardContent>
  );
};

export default CardDetails;
