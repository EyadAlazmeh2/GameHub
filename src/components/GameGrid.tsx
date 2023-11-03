import { Button, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UseGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } = UseGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchScroll =
    data?.pages.reduce((totla, page) => totla + page.results.length, 0) || 0;
  if (error)
    return (
      <Text color="red" fontSize="30px">
        {error.message}
      </Text>
    );
  return (
    <InfiniteScroll
      dataLength={fetchScroll}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <HStack justifyContent="center">
          <Button marginLeft={2} marginY={5} paddingX={14}>
            <Spinner />
          </Button>
        </HStack>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
