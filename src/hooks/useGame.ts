import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import APIClient from "../services/api-client";
import { Game } from "./useGames";

interface gameDetail {
    id: number;
    name: string;
    description_raw: string
}

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
    useQuery({
        queryKey: ["games", slug],
        queryFn: () => apiClient.get(slug),
    });

export default useGame;
