const percentage = Number(prompt("Enter Your Percentage"));
let myimage = document.getElementById("myimage");

let grade = "";
let status = "";
let color = "";
let image = "";

if (percentage >= 0 && percentage <= 100) {

    if (percentage >= 80) {
       
        grade = " 🏅A<sup>+<sup><br> 🏆Outstandinge";
        status = "PASS";
        color = "#28a745";
        image = "images/pass.png"
        ;
    }
    else if (percentage >= 70) {
    
        grade = "🥇A <br>🎉Excellent";
        status = "PASS";
        color = "#28a745";
        image = "images/pass.png"
        ;
    }
    else if (percentage >= 60) {
       
        grade = "🥈B <br>👏Welldone" ;
        status = "PASS";
        color = "#28a745";
        image = "images/pass.png"
        ;
    }
    else if (percentage >= 50) {
    
        grade = "🥉C <br> 🌟improvment";
        status = "PASS";
        color = "#28a745";
        image = "images/pass.png"
        ;
    }
    else {
    
        grade = "💔F <br> 💪DoBetter";
        status = "FAIL";
        color = "#dc3545";
        image = "images/fail.png"
        ;
    }

}
else{

    grade = "-";
    status = "⚠️ INVALID PERCENTAGE";
    color = "#ff9800";
    image = "images/warning.png"
    ;

}

const container = document.getElementById("products");

container.innerHTML = `
 
<div class="card">

    <img src="${image}" alt="">

    <h2>🎓 Student Result</h2>

    <p><strong>Percentage:</strong> ${percentage}%</p>

    <p class="grade">${grade}</p>

    <button style="background:${color}">
        ${status}
    </button>

</div>
 `;