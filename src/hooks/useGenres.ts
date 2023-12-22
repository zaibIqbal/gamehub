import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres"
import APIClient from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 hours
    initialData: genres

})

// const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;