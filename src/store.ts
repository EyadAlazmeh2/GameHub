import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  add: (newgame: GameQuery) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  add: (newgame) => set(() => ({ gameQuery: newgame })),
}));

export default useGameQuery;
