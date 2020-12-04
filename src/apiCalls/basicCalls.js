import {dogs_fetch_success} from '../Actions/action'
export const getDogs =  (res) =>async  dispatch => {
  // dispatch getting dogs action for loader or to notify component that the call is m=being made
   fetch(
    `https://dog.ceo/api/breed/${res}/images/random/10`
  )
    .then((response) => response.json())
    .then((item) => {
        //dispatch success action and send item in that action
        dispatch(dogs_fetch_success(item.message))
    });
};
 