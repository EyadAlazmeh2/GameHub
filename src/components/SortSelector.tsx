import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
  onSelectedSortOrder: (sortOrder: string) => void
}

const SortSelector = ({ onSelectedSortOrder }: Props) => {
  const [selectOrder, setSelectOrder] = useState('')
  const sortOrder = [
    { value: '', label: 'Relevance'},
    { value: '-added', label: 'Date added'},
    { value: 'name', label: 'Name'},
    { value: '-released', label: 'Release Date'},
    { value: '-metacritic', label: 'Popularity'},
    { value: '-rating', label: 'Average rating'},
  ]
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {selectOrder || 'Relevance'}</MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem key={order.value} value={order.value} onClick={() => {onSelectedSortOrder(order.value), setSelectOrder(order.label)}}>{order.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
