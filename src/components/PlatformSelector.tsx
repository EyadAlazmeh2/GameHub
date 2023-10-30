import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platforms: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (g) => g.id === selectedPlatformId
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
                onClick={() => onSelectedPlatform(null)}
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
                onSelectedPlatform(platform);
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
