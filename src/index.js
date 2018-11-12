function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*change topnav to topnav.responsive*/
    } else {
        x.className = "topnav"
    }
}

function showSkillsPage() {
    console.log('show page');
    document.getElementById("languages-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
    document.getElementById("experience-page").style.display = "none";
    document.getElementById("education-page").style.display = "none";
    document.getElementById("contact-page").style.display = "none";
    document.getElementById("skills-page").style.display = "block";
}

document.getElementById("skills-menu").onclick = showSkillsPage;

function showLanguagesPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("skills-page").style.display = "none";
    document.getElementById("experience-page").style.display = "none";
    document.getElementById("education-page").style.display = "none";
    document.getElementById("contact-page").style.display = "none";
    document.getElementById("languages-page").style.display = "block";
}

document.getElementById("languages-menu").onclick = showLanguagesPage;


