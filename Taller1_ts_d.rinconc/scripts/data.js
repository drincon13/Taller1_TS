import { Serie } from './serie.js';
export var ser = new Serie(1, "Breaking Bad", "AMC", 5);
export var ser2 = new Serie(2, "Orange Is the new Black", "Netflix", 6);
export var ser3 = new Serie(3, "Game of Thrones", "HBO", 7);
export var ser4 = new Serie(4, "The Big Bang Theory", "CBS", 12);
export var ser5 = new Serie(5, "Sherlock", "BBC", 4);
export var ser6 = new Serie(6, "A Very English Scandal", "BBC", 2);
var serieTable = document.getElementById("serie");
var promediosTable = document.getElementById("promedio");
function mostrarDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tc><td>".concat(serie.numero, "</td></tc>\n    <tc><td>").concat(serie.name, "</td></tc>\n    <tc><td>").concat(serie.channel, "</td></tc>\n    <tc><td>").concat(serie.seasons, "</td></tc>");
    serieTable.appendChild(tbodySerie);
}
function darPromedioSeasons() {
    var ser1sea = ser.seasons;
    var ser2sea = ser2.seasons;
    var ser3sea = ser3.seasons;
    var ser4sea = ser4.seasons;
    var ser5sea = ser5.seasons;
    var ser6sea = ser6.seasons;
    var promedioSeries = (ser1sea + ser2sea + ser3sea + ser4sea + ser5sea + ser6sea) / 6;
    var tpromedioSerie = document.createElement("tr");
    tpromedioSerie.innerHTML = "<tc><td>Seasons Average: </td><td>".concat(promedioSeries, "</td></tc>");
    promediosTable.appendChild(tpromedioSerie);
}
function main() {
    mostrarDatosSerie(ser);
    mostrarDatosSerie(ser2);
    mostrarDatosSerie(ser3);
    mostrarDatosSerie(ser4);
    mostrarDatosSerie(ser5);
    mostrarDatosSerie(ser6);
    darPromedioSeasons();
}
main();
