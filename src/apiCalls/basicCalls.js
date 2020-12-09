import {dogs_fetch_success, dogs_fetch_error } from '../Actions/action'
export const getDogs =  (res) =>async  dispatch => {
  // dispatch getting dogs action for loader or to notify component that the call is m=being made
  return fetch(
    `https://dog.ceo/api/breed/${res}/images/random/10`
  )
    .then((response) => response.json())
    .then((item) => {
        //dispatch success action and send item in that action
          if(item.status === "success"){
            dispatch(dogs_fetch_success(item.message))
          } else if(item.status === "error"){
            dispatch(dogs_fetch_error(item.message))
          }
          return item;
    });
};
 