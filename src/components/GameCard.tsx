import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcon from "./PlatformListIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius="10" overflow="hidden">
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
