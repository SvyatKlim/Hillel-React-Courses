import {useCallback} from "react";

export const calcTotalPrice = (products) => products.reduce((accumulator, item) => (accumulator + item.price) * item.quantity, 0);
export const calcTotalCount = (products) => products.reduce((accumulator, item) => accumulator + item.quantity, 0);

export const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};