import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenhshot";

interface Props {
  gameId?: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {data?.results.map((screen) => (
          <Image key={screen.id} src={screen.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshot;
