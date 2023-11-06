import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import { ApiClient } from "../services/api-client";

const useGameDetails = (slug?: string) => {
  const apiClient = new ApiClient<Game>(`/games/${slug}`);
  return useQuery({
    queryKey: ["games", slug],
    queryFn: apiClient.get,
  });
};

export default useGameDetails;
