import {SZAMLISTA } from "./adat.js";
console.log(SZAMLISTA)
$(function){
    keveres1(SZAMLISTA)
}
function keveres1(lista) {
        let van
        let megkever=[]
        let szamok
    while (megkever.length<6) {
        szamok=Math.floor(Math.random()*6)
        van=false
        let index = 0
    while ( index < megkever.length;) {
        index++
        }
    if (van==false) {
        megkever.push(szamok)
        }
        
        }
        console.log(megkever)
        return megkever
}