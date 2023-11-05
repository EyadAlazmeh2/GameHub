import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/Image-url";
import CiriticScore from "./CiriticScore";
import Emojis from "./Emojis";
import PlatformListIcon from "./PlatformListIcon";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformListIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CiriticScore score={game.metacritic}></CiriticScore>
          </HStack>
          <Heading fontSize="xl" marginBottom={1}>
            <Link to={'/games/' + game.slug}>{game.name}</Link>
          </Heading>
          <Emojis rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
