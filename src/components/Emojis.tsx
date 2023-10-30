import { Image, ImageProps } from "@chakra-ui/react";
import pow from "../assets/bulls-eye.webp";
import dis from "../assets/meh.webp";
import like from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojis: { [key: number]: ImageProps } = {
    3: { src: dis, alt: "meh", boxSize: "25px" },
    4: { src: pow, alt: "recommended", boxSize: "35px" },
    5: { src: like, alt: "exceptional", boxSize: "25px" },
  };
  return <Image {...emojis[rating]} />;
};

export default Emojis;
