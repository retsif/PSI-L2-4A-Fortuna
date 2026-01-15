const dane = {
    kto: "Alejandro Fortuna",
    jezyk: "Nie ma",
    dlaczego: "Rip",
    hobby: ["Snowboard", "Sztuki walki"]
};

document.getElementById("imie").innerText = dane.kto;
document.getElementById("jezyk").innerText = dane.jezyk;
document.getElementById("opis").innerText = dane.dlaczego;

dane.hobby.forEach(h => {
    document.getElementById("lista").innerHTML += `<li>${h}</li>`;
});