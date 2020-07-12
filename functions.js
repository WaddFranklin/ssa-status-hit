function capturar() {
    var atkLevel = document.getElementById("level-atk").value;
    var result = document.getElementById("result");
    var aimLevel = document.getElementById("level-aim").value;
    var statusHit = document.getElementById("status-hit").value;
    var statusHitSkill = document.getElementById("status-hit-skill").value;
    var statusResist = document.getElementById("status-resist").value;

    var increaseFactor = (statusHitSkill/100) * (1.0 + (statusHit/100));
    var levelDiference = ((aimLevel - atkLevel)/100)*0.02;

    var total = Math.ceil((increaseFactor - levelDiference - (statusResist/100))*100);

    result.innerHTML = "Você tem " + total + "% de chance de acertar!";
}

function limpar() {
    document.getElementById("level-atk").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("level-aim").value = "";
    document.getElementById("status-hit").value = "";
    document.getElementById("status-hit-skill").value = "";
    document.getElementById("status-resist").value = "";
}