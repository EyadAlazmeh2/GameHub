import { List, ListItem, Image, HStack, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/Image-url";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2} paddingLeft={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
