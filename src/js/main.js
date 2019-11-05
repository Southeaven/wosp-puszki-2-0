// scss styles
import style from "../scss/main.scss";

// js modules
// import test from './test'

const result = fetch("https://puszki.ang3r.pl/json/").then(function(data){
    console.log(data.json());
    return data.json();
});