function submitSurvey() {
    var name = document.getElementById("username").value;
    var mood = document.getElementById("mood").value;
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var reason = document.getElementById("reason").value;

    if (name == "" || mood == "none" || q1 == "0" || q2 == "0" || q3 == "0" || q4 == "0" || q5 == "0" || reason == "none") {
        alert("Please answer all the questions.");
        return;
    }

    var total = Number(q1) + Number(q2) + Number(q3) + Number(q4) + Number(q5);

    var level = "High";
    if (total <= 9) { level = "Low"; }
    else if (total <= 14) { level = "Medium"; }

    localStorage.setItem("name", name);
    localStorage.setItem("mood", mood);
    localStorage.setItem("total", total);
    localStorage.setItem("level", level);
    localStorage.setItem("reason", reason);
    window.location.href = "result.html";
}
