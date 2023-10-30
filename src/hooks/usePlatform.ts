import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

const apiClient = new ApiClient('/platforms/lists/parents')

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll<Platform>(),
    staleTime: 1 * 1000 * 24
  });

export default usePlatforms;
