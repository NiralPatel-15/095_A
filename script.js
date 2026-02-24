
function registerUser() {
    const enrol = document.getElementById("regEnrol").value;
    localStorage.setItem("studentEnrol", enrol);
    alert("Registration Successful! Please Login.");
    window.location.href = "login.html";
    return false;
}

function loginUser() {
    const enrol = document.getElementById("loginEnrol").value;
    localStorage.setItem("studentEnrol", enrol);
    window.location.href = "dashboard.html";
    return false;
}

function loadDashboard() {
    const enrol = localStorage.getItem("studentEnrol");
    if (!enrol) {
        window.location.href = "login.html";
    }
    document.getElementById("displayEnrol").innerText = enrol;
}

// Save Subject
function saveSubject() {
    const subject = document.querySelector('input[name="subject"]:checked').value;
    alert("Elective Subject Selected: " + subject);
    return false;
}

// Logout
function logout() {
    localStorage.removeItem("studentEnrol");
    window.location.href = "login.html";
}