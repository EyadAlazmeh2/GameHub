import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone, MdWeb } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";

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
    web: MdWeb,
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
