import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CiriticScore from "./CiriticScore";

interface Props {
  data?: Game;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={5} marginY={5}>
      <GridItem>
        <Text color="gray.600" fontWeight="bold">
          Platforms
        </Text>
        {data?.parent_platforms.map((plat) => (
          <Text key={plat.platform.id}>{plat.platform.name}</Text>
        ))}
      </GridItem>
      <GridItem>
        <Text color="gray.600" fontWeight="bold">
          MetaScore
        </Text>
        <Text>
          <CiriticScore score={data?.metacritic}></CiriticScore>
        </Text>
      </GridItem>
      <GridItem>
        <Text color="gray.600" fontWeight="bold">
          Genres
        </Text>
        {data?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GridItem>
      <GridItem>
        <Text color="gray.600" fontWeight="bold">
          Publishers
        </Text>
        {data?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GridItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
