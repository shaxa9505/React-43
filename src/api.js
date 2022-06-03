import API_URl from "./config";

async const getMailById = (mealId) => {
    const response = await fetch(API_URl + "lookup.php?i=" + mealId);
    return await response.json()
}

async const getAllCategories = () => {
    const response = await fetch(API_URl + "categories.php")
    return await response.json()
}

async const getFilterCategory = (categoryName) => {
    const response = await fetch(API_URl + "filter.php?c=" + categoryName);
    return await response.json()
}

export {getMailById, getAllCategories, getFilterCategory}