import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");

const apiClient = new ApiClient('/genres')

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll<Genre>(),
    staleTime: 1 * 1000 * 24
  });

export default useGenre;
