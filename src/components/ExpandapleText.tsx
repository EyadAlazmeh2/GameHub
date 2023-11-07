import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
}

const ExpandapleText = ({ children  Props) => {
  const limit = 300
  const [value, setValue] = useState(false);

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = value ? children : children.substring(0, limit) + " .....";
  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          onClick={() => setValue(!value)}
          colorScheme="yellow"
        >
          {value ? "Shom less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandapleText;
