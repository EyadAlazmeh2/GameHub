import { List, ListItem, Image, HStack, Text, Spinner, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/Image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void
  selectGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;
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
              <Button variant='link' fontWeight={genre.id === selectGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
