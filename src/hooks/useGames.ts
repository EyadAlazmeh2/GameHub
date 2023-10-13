import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface fetchGames {
  count: number;
  results: Game[];
}

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchGames>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { error, games };
};

export default UseGames;
