import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHaeding = ({ gameQuery }: Props) => {
  const nameHaeding = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <>
      <Heading fontSize="5xl" marginBottom={5}>
        {nameHaeding}
      </Heading>
    </>
  );
};

export default GameHaeding;
