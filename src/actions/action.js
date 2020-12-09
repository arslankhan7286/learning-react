export const dogs_fetch_success = (item) => {
    return {
        type:'dogs_fetch',
        payload: item
    }
};
export const dogs_fetch_error = (item) => {
    return {
        type:'dogs_fetch_error',
        payload: item
    }
};
