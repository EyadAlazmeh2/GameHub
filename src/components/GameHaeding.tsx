import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHaeding = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const nameHaeding = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <>
      <Heading fontSize="5xl" marginBottom={5}>
        {nameHaeding}
      </Heading>
    </>
  );
};

export default GameHaeding;
