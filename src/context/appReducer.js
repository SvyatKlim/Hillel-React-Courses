export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const RESET_COUNT = 'RESET_COUNT';


export const reducer = ({count}, action) => {
    switch (action.type) {
        case INCREMENT_COUNT : {
            return {
                count: count + 1,
            }
        }
        case DECREMENT_COUNT : {
            return {
                count: count - 1,
            }
        }
        case RESET_COUNT : {
            return {
                count: 0,
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}