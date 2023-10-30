import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHaeding = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (g) => g.id === gameQuery.platformId
  );
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
