function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*change topnav to topnav.responsive*/
    } else {
        x.className = "topnav"
    }
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function showSkillsPage() {
    // console.log('show page');
    hide("languages-page");
    hide("home-page");
    hide("experience-page");
    hide("education-page");
    hide("contact-page");
    show("skills-page");
}

document.getElementById("skills-menu").onclick = showSkillsPage;

function showLanguagesPage() {
    hide("home-page");
    hide("skills-page");
    hide("experience-page");
    hide("education-page");
    hide("contact-page");
    show("languages-page");
}

document.getElementById("languages-menu").onclick = showLanguagesPage;

function showHomePage() {
    hide("languages-page");
    hide("skills-page");
    hide("experience-page");
    hide("education-page");
    hide("contact-page");
    show("home-page");
}

document.getElementById("home-menu").onclick = showHomePage;

function showExperiencePage() {
    hide("home-page");
    hide("skills-page");
    hide("languages-page");
    hide("education-page");
    hide("contact-page");
    show("experience-page");
}

document.getElementById("experience-menu").onclick = showExperiencePage;

function showEducationPage() {
    hide("home-page");
    hide("skills-page");
    hide("experience-page");
    hide("languages-page");
    hide("contact-page");
    show("education-page");
}

document.getElementById("education-menu").onclick = showEducationPage;

function showContactPage() {
    hide("home-page");
    hide("skills-page");
    hide("experience-page");
    hide("education-page");
    hide("languages-page");
    show("contact-page");
}

document.getElementById("contact-menu").onclick = showContactPage;
