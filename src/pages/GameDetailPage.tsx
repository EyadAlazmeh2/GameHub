import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandapleText from "../components/ExpandapleText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshot from "../components/GameScreenshot";
import GameTrailer from "../components/GameTrailer";
import useGameDetails from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{data?.name}</Heading>
          <Text>
            <ExpandapleText children={data?.description_raw} />
          </Text>
          <GameAttributes data={data} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={data?.id} />
          <GameScreenshot gameId={data?.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
