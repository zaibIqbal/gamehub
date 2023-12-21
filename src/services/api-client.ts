import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
    count: number;
    next: string | null,
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "62d67cb5b8ef4b9b80ac06888648a287"
    }
})

class APIClient<T>{
    endpoinet: string;

    constructor(endpoint: string) {
        this.endpoinet = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoinet, config).then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoinet + "/" + id).then(res => res.data)
    }
}

export default APIClient;