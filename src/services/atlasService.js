import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const getCountryByName = async (country) => {
    const key = `country_name_${country.toLowerCase()}`;

    const cached = loadFromLocalStorage(key);
    if (cached) {
        console.log("📦 Loaded from localStorage:", cached);
        return cached;
    }

    let url = `${BASE_URL}/name/${country}`;
    let resp = await axios.get(url);
    const data = resp.data[0];

    saveToLocalStorage(key, data);
    return data;
};

export const getCountryByCode = async (countryCode) => {
    const key = `country_code_${countryCode.toLowerCase()}`;

    const cached = loadFromLocalStorage(key);
    if (cached) {
        console.log("📦 Loaded from localStorage:", cached);
        return cached;
    }

    let url = `${BASE_URL}/alpha/${countryCode}`;
    let resp = await axios.get(url);
    const data = resp.data[0];

    saveToLocalStorage(key, data);
    return data;
};
