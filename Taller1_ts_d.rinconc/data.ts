import {Serie} from './serie.js';



export const ser = new Serie(1, "Breaking Bad", "AMC", 5);
export const ser2 = new Serie(2, "Orange Is the new Black", "Netflix", 6);
export const ser3 = new Serie(3, "Game of Thrones", "HBO", 7);
export const ser4 = new Serie(4, "The Big Bang Theory", "CBS", 12);
export const ser5 = new Serie(5, "Sherlock", "BBC", 4);
export const ser6 = new Serie(6, "A Very English Scandal", "BBC", 2);

let serieTable: HTMLElement = document.getElementById("serie")!;
function mostrarDatosSerie(serie: Serie): void{
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tc><td>${serie.numero}</td></tc>
    <tc><td>${serie.name}</td></tc>
    <tc><td>${serie.channel}</td></tc>
    <tc><td>${serie.seasons}</td></tc>`
    serieTable.appendChild(tbodySerie);
}

let promediosTable: HTMLElement = document.getElementById("promedio")!;
function darPromedioSeasons(): void{

    let ser1sea: number = ser.seasons;   
    let ser2sea: number = ser2.seasons;
    let ser3sea: number = ser3.seasons;
    let ser4sea: number = ser4.seasons;
    let ser5sea: number = ser5.seasons;
    let ser6sea: number = ser6.seasons;

    let promedioSeries: number = (ser1sea+ser2sea+ser3sea+ser4sea+ser5sea+ser6sea)/6;
    let tpromedioSerie = document.createElement("tr");

    tpromedioSerie.innerHTML = `<tc><td>Seasons Average: </td><td>${promedioSeries}</td></tc>`
    promediosTable.appendChild(tpromedioSerie);
}

function main(){
    mostrarDatosSerie(ser);
    mostrarDatosSerie(ser2);
    mostrarDatosSerie(ser3);
    mostrarDatosSerie(ser4);
    mostrarDatosSerie(ser5);
    mostrarDatosSerie(ser6);
    darPromedioSeasons();
}

main()

