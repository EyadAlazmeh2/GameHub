import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platforms } from "../hooks/usePlatform";
import { useState } from "react";

interface Props{
  onSelectedPlatform: (platforms: Platforms) => void
  selectedPlatforms: Platforms | null
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatforms }: Props) => {
  const { data, error } = usePlatforms()
  if( error ) return null
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatforms?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id} onClick={() => {onSelectedPlatform(platform)}}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
