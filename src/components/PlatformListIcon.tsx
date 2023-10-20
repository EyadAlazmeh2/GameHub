import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone , MdWeb} from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformListIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: MdWeb
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          color="gray.500"
          key={platform.id}
          marginY={1}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
};

export default PlatformListIcon;
