import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const {gameQuery, add} = useGameQuery()
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) add({searchText: ref.current.value});
          navigate('/')
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
            ref={ref}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
