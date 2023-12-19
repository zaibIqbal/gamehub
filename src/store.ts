import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (id: number) => void;
    setPlatformId: (id: number) => void;
    setSortOrder: (order: string) => void;
    setSearchText: (text: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
    setPlatformId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
    setSortOrder: (order) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
    setSearchText: (text) => set(() => ({ gameQuery: { searchText: text } }))
}))

export default useGameQueryStore;