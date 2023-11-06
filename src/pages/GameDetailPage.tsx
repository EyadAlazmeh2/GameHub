import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandapleText from "../components/ExpandapleText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGameDetails from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>
        <ExpandapleText children={data?.description_raw} />
      </Text>
      <GameAttributes data={data} />
      <GameTrailer gameId={data?.id} />
    </>
  );
};

export default GameDetailPage;
