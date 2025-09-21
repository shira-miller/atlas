import axios from "axios";

const BASE_URL = "https://expressrichpepole.onrender.com/";

const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const getVipList = async () => {
    const key = "vip_list";

    const cached = loadFromLocalStorage(key);
    if (cached) {
        console.log("📦 Loaded from localStorage:", cached);
        return cached;
    }

    let resp = await axios.get(BASE_URL);
    const data = resp.data;

    saveToLocalStorage(key, data);
    return data;
};
