import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "62d67cb5b8ef4b9b80ac06888648a287"
    }
})