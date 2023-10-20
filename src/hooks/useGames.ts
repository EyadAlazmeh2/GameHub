import useData from "./useData";
import { Genre } from "./useGenre";
import { Platforms } from "./usePlatform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectGenre: Genre | null, selectPlat: Platforms | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectGenre?.id, platforms: selectPlat?.id } },
    [selectGenre?.id, selectPlat?.id]
  );

export default useGames;
