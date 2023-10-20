import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import UseGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props{
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = UseGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && (
        <Text color="red" fontSize="30px">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
