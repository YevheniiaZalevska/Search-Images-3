import axios from "axios";

export const fetchArticles = async (query, page) => {
    const data = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${'gCkFzOYZuOscSLOV6GWLILZdioJ-60nmBJSEs0d3bTA'}&query=${query}&page=${page}`);

    return data;
}