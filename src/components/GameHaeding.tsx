import { Heading } from "@chakra-ui/react";
import useGameQuery, { GameQuery } from "../store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHaeding = () => {
  const {gameQuery} = useGameQuery()
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const nameHaeding = `${platform?.name || (genre?.name ? "" : 'All')} ${genre?.name || ""} Games` ;
  return (
    <>
      <Heading fontSize="5xl" marginBottom={5}>
        {nameHaeding}
      </Heading>
    </>
  );
};

export default GameHaeding;
