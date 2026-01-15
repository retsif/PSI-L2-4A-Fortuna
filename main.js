const dane = {
    kto: "Alejandro Fortuna",
    jezyk: "Dalej nie ma takiego",
    dlaczego: "Powoli do celu",
    hobby: ["Snowboard", "Sztuki walki"]
};

document.getElementById("imie").innerText = dane.kto;
document.getElementById("jezyk").innerText = dane.jezyk;
document.getElementById("opis").innerText = dane.dlaczego;

dane.hobby.forEach(h => {
    document.getElementById("lista").innerHTML += `<li>${h}</li>`;
});