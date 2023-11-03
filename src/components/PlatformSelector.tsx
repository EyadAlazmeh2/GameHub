import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQuery from "../store";

const PlatformSelector = () => {
  const {gameQuery, add} = useGameQuery()
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (g) => g.id === gameQuery.platformId
  );
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {selectedPlatform?.name && (
            <Box>
              <MenuItem
                marginBottom={2}
                textColor="red"
                onClick={() => add({...gameQuery, platformId: undefined})}
              >
                Clear
              </MenuItem>
              <hr></hr>
            </Box>
          )}
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => {
                add({...gameQuery, platformId: platform.id});
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
