function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*change topnav to topnav.responsive*/
    } else {
        x.className = "topnav"
    }
}

function $(id) {
    return document.getElementById(id);
}

function hide(id) {
    $(id).style.display = "none";
}

function show(id) {
    $(id).style.display = "block";
}

// function showSkillsPage() {
//     hide("languages-page");
//     hide("home-page");
//     hide("experience-page");
//     hide("education-page");
//     hide("contact-page");
//     show("skills-page");
// }

// function showLanguagesPage() {
//     hide("home-page");
//     hide("skills-page");
//     hide("experience-page");
//     hide("education-page");
//     hide("contact-page");
//     show("languages-page");
// }

// function showHomePage() {
//     hide("languages-page");
//     hide("skills-page");
//     hide("experience-page");
//     hide("education-page");
//     hide("contact-page");
//     show("home-page");
// }

// function showExperiencePage() {
//     hide("home-page");
//     hide("skills-page");
//     hide("languages-page");
//     hide("education-page");
//     hide("contact-page");
//     show("experience-page");
// }

// function showEducationPage() {
//     hide("home-page");
//     hide("skills-page");
//     hide("experience-page");
//     hide("languages-page");
//     hide("contact-page");
//     show("education-page");
// }

// function showContactPage() {
//     hide("home-page");
//     hide("skills-page");
//     hide("experience-page");
//     hide("education-page");
//     hide("languages-page");
//     show("contact-page");
// }

// $("home-menu").onclick = showHomePage;
// $("skills-menu").onclick = showSkillsPage;
// $("education-menu").onclick = showEducationPage;
// $("experience-menu").onclick = showExperiencePage;
// $("contact-menu").onclick = showContactPage;
// $("languages-menu").onclick = showLanguagesPage;

function hideElement(page) {
    page.style.display = "none";
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page-block");
    // pages.forEach(function(page) {
    //     console.info("hide : " + page.id);
    //     page.style.display = "none";
    // });
    pages.forEach(hideElement);

    // for (var i = 0; i < pages.length; i++) {
    //     pages[i].style.display = 'none';
    // }
}


var links = document.querySelectorAll('.topnav .menu-item');
for (var i = 0; i < links.length; i++) {
    // console.log(links[i].getAttribute("data-page"), links[i]);

    links[i].onclick = function () {
        // console.warn("hide all pages");
        hideAllPages();
        var page = this.getAttribute('data-page');
        // console.info("show page", page);
        show(page + "-page");
    };
}

show('home-page');
