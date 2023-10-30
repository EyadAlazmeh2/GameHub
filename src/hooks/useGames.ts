import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { ApiClient } from "../services/api-client";
import { Platform } from "./usePlatform";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number
}

// const useGames = (gameQuery: GameQuery | null) =>
  // useData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery?.genre?.id,
  //       platforms: gameQuery?.platform?.id,
  //       ordering: gameQuery?.sortOrder,
  //       search: gameQuery?.searchText,
  //     },
  //   },
  //   [gameQuery]
  // );

const apiClient = new ApiClient('/games')

const useGames = (gameQuery?: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll<Game>({
        params: {
          genres: gameQuery?.genre?.id,
          platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        }
    }),
    staleTime: 1 * 1000 * 24
  })

export default useGames;
