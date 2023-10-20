import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatform";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null)
  const [selectPlat, setSelectPlat] = useState<Platforms | null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList selectGenre={selectGenre} onSelectGenre={(genre) => setSelectGenre(genre)}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatforms={selectPlat} onSelectedPlatform={(platform) => setSelectPlat(platform)}></PlatformSelector>
        <GameGrid selectPlatform={selectPlat} selectGenre={selectGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
