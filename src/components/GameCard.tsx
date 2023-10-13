import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcon from "./PlatformListIcon";
import CiriticScore from "./CiriticScore";
import getCroppedImageUrl from "../services/Image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius="10" overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <HStack justifyContent='space-between'>
            <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)} />
            <CiriticScore score={game.metacritic}></CiriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
