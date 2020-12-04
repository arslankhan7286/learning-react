// export const DOGS = "DOGS";

// export const dogs_catg = (data) => {
//   return {
//     type: DOGS,
//     payload: data
//   };
// };
export const dogs_fetch_success = (item) => {
    return {
        type:'dogs_fetch',
        payload: item
    }
};
