function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*change topnav to topnav.responsive*/
    } else {
        x.className = "topnav"
    }
}

function $$(id) {
    return document.getElementById(id);
}

function hide(id) {
    $$(id).style.display = "none";
}

function show(id) {
    $$(id).style.display = "block";
}

function hideElement(page) {
    page.style.display = "none";
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page-block");
    pages.forEach(hideElement);
}


function initMenu() {
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
}

function displaySkills() {
    var resultlist = document.querySelector('#skills-page ul');

    var skillsli = skills.map(function (skill) {
        var endorsedBy = "~ Endorsed by ";
        if (skill.endorsedBy == "") {
            endorsedBy = "";
        };
        var name = skill.name.toUpperCase();  //skill[0].toUpperCase();
        return `<li>${name}
        <span style = "color: gray">- ${skill.endorsments}
        ${endorsedBy}</span>${skill.endorsedBy}
                </li>`; // '<li>' + skills[0] + '</li>'

    });
    console.log('resultList:', skillsli);

    resultlist.innerHTML = skillsli.join('');
}

function initSkillsPage() {

    $.ajax('data/skills.json').done(function (skills) {
        console.info('fileData', skills);
        displaySkills(skills);
    }) 
}

initMenu();
$('#home-page').show();
initSkillsPage();