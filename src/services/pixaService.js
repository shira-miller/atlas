import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";

const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const getImagesByCategory = async (category) => {
    if (!process.env.REACT_APP_API_KEY_PIXABAY) {
        throw new Error("API Key not found!");
    }

    const key = `pixabay_category_${category.toLowerCase()}`;

    const cached = loadFromLocalStorage(key);
    if (cached) {
        console.log("📦 Loaded from localStorage:", cached);
        return cached;
    }

    let url = `${BASE_URL}?key=${process.env.REACT_APP_API_KEY_PIXABAY}&q=${category}&image_type=photo&per_page=10`;
    let resp = await axios.get(url);
    const data = resp.data.hits;

    saveToLocalStorage(key, data);
    return data;
};
