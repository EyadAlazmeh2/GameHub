import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Game } from "../entities/Game";

const useGameDetails = (slug?: string) => {
  const apiClient = new ApiClient<Game>(`/games/${slug}`);
  return useQuery({
    queryKey: ["games", slug],
    queryFn: apiClient.get,
  });
};

export default useGameDetails;
