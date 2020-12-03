import { useCallback } from "react";

export const login = (data) => {
    console.log("login triggered")
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    console.log(password, data.password)
    if(email === data.email){
        console.log("login - if triggered")
        if(password === data.password){
            console.log("authenticated")
            return true;
        } else {
            console.log("incorrect password")
        }
    } else {
        console.log('error');
        console.log('testing')
    }
}

export const register = (data) => {
    console.log("registered triggered");
    console.log("Register function data: ", data);
    if(Object.keys(data).length !== 0 ) {
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                localStorage.setItem('email', data.email);
                localStorage.setItem('phone', data.phone);
                localStorage.setItem('password', data.password);
          }
}