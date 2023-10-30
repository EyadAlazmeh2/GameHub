import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");

const apiClient = new ApiClient<Genre>('/genres')

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24
  });

export default useGenre;
