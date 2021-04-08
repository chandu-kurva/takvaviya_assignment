let runProgramEl = document.getElementById("runProgram");
let progressBarEl = document.getElementById("progressBar");
let progressBarTextEl = document.getElementById("progressBarText");
let loadMoreBtnEl = document.getElementById("loadMoreBtn");
let timeDetailsEl = document.getElementById("timeDetails");
let descDetailsEl = document.getElementById("descDetails");

let loadingResults = function () {
    let timePara = document.createElement("p");
    let detailsPara = document.createElement("p");
    timePara.textContent = "April 08, 2021 16:49";
    detailsPara.textContent = "Report - Print Materails - Out Branch Materials Inconsitent typography point sizes";
    descDetailsEl.appendChild(detailsPara);
    timeDetailsEl.appendChild(timePara);
}
loadMoreBtnEl.addEventListener("click", loadingResults);
let progressChange = function () {
    let percetage = Math.ceil(Math.random() * 100);
    progressBarEl.style.width = percetage + "%";
    progressBarTextEl.textContent = percetage + "%";
    window.alert(percetage + "%" + " Accuracy Secured \ Click Ok to see Results");

}
runProgramEl.addEventListener("click", progressChange);