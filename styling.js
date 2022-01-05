function applygreen(){
    document.getElementById('im').style.color = "#30E3CA";
    document.getElementById('hey').style.animation = "green-light 1.5s ease-in-out infinite alternate"
    document.getElementById('abouttext').style.color = "#30E3CA";
    document.getElementById('abouttext').style.animation = "green-about 20s ease-in-out infinite alternate";
    document.getElementById('metext').style.animation = "green-about 20s ease-in-out infinite alternate";
    document.getElementById('edu-logo').src = "edu-green.png";
    document.getElementById('aim-logo').src = "aim-green.png";
    document.getElementById('learning-logo').src = "learning-green.png";
    document.getElementById('music-logo').src = "music-green.png";
    document.getElementById('car-logo').src = "car-green.png";
    document.getElementById('aboutimg').src = "about-green.svg";
    document.getElementById('skill').style.color = "#30E3CA";
    document.querySelector('skill').style.animation = "green-skills 8s ease-in-out infinite 3s";
    document.getElementById('projecttext').style.fill = "#30E3CA";
    document.getElementById('projecttext').style.animation = "green-text 3s infinite";
    document.getElementById('icon-mail').src = "mail-green.svg";
    document.getElementById('icon-insta').src = "insta-green.svg";
    document.getElementById('icon-github').src = "github-green.svg";
    document.getElementById('icon-linkedin').src = "linkedin-green.svg";
    window.onscroll = function(){greennavbar()};
}
function applyblue(){
    document.getElementById('im').style.color = "#82ACFF";
    document.getElementById('hey').style.animation = "blue-light 1.5s ease-in-out infinite alternate";
    document.getElementById('abouttext').style.color = "#82ACFF";
    document.getElementById('abouttext').style.animation = "blue-about 20s ease-in-out infinite alternate";
    document.getElementById('metext').style.animation = "blue-about 20s ease-in-out infinite alternate";
    document.getElementById('edu-logo').src = "edu-blue.png";
    document.getElementById('aim-logo').src = "aim-blue.png";
    document.getElementById('learning-logo').src = "learning-blue.png";
    document.getElementById('music-logo').src = "music-blue.png";
    document.getElementById('car-logo').src = "car-blue.png";
    document.getElementById('aboutimg').src = "about-blue.svg";
    document.getElementById('skill').style.color = "#82ACFF";
    document.querySelector('skill').style.animation = "blue-skills 8s ease-in-out infinite 3s";
    document.getElementById('projecttext').style.fill = "#82ACFF";
    document.getElementById('projecttext').style.animation = "blue-text 3s infinite";
    document.getElementById('icon-mail').src = "mail-blue.svg";
    document.getElementById('icon-insta').src = "insta-blue.svg";
    document.getElementById('icon-github').src = "github-blue.svg";
    document.getElementById('icon-linkedin').src = "linkedin-blue.svg";
    window.onscroll = function(){bluenavbar()};
}
function applypurple(){
    document.getElementById('im').style.color = "#892CDC";
    document.getElementById('hey').style.animation = "purple-light 1.5s ease-in-out infinite alternate";
    document.getElementById('abouttext').style.color = "#892CDC";
    document.getElementById('abouttext').style.animation = "purple-about 20s ease-in-out infinite alternate";
    document.getElementById('metext').style.animation = "purple-about 20s ease-in-out infinite alternate";
    document.getElementById('edu-logo').src = "edu-purple.png";
    document.getElementById('aim-logo').src = "aim-purple.png";
    document.getElementById('learning-logo').src = "learning-purple.png";
    document.getElementById('music-logo').src = "music-purple.png";
    document.getElementById('car-logo').src = "car-purple.png";
    document.getElementById('aboutimg').src = "about-purple.svg";
    document.getElementById('skill').style.color = "#892CDC";
    document.querySelector('skill').style.animation = "purple-skills 8s ease-in-out infinite 3s";
    document.getElementById('projecttext').style.fill = "#892CDC";
    document.getElementById('projecttext').style.animation = "purple-text 3s infinite";
    document.getElementById('icon-mail').src = "mail-purple.svg";
    document.getElementById('icon-insta').src = "insta-purple.svg";
    document.getElementById('icon-github').src = "github-purple.svg";
    document.getElementById('icon-linkedin').src = "linkedin-purple.svg";
    window.onscroll = function(){purplenavbar()};
}
function applyorange(){
    document.getElementById('im').style.color = "#e66d42";
    document.getElementById('hey').style.animation = "light 1.5s ease-in-out infinite alternate";
    document.getElementById('abouttext').style.color = "#e66d42";
    document.getElementById('abouttext').style.animation = "orng-about 20s ease-in-out infinite alternate";
    document.getElementById('metext').style.animation = "orng-about 20s ease-in-out infinite alternate";
    document.getElementById('edu-logo').src = "edu.png";
    document.getElementById('aim-logo').src = "aim.png";
    document.getElementById('learning-logo').src = "learning.png";
    document.getElementById('music-logo').src = "music.png";
    document.getElementById('car-logo').src = "car.png";
    document.getElementById('aboutimg').src = "about.svg";
    document.getElementById('skill').style.color = "#e66d42";
    document.querySelector('skill').style.animation = "orng-skills 8s ease-in-out infinite 3s";
    document.getElementById('projecttext').style.fill = "#e66d42";
    document.getElementById('projecttext').style.animation = "orng-text 3s infinite";
    document.getElementById('icon-mail').src = "mail-orng.svg";
    document.getElementById('icon-insta').src = "insta-orng.svg";
    document.getElementById('icon-github').src = "github-orng.svg";
    document.getElementById('icon-linkedin').src = "linkedin-orng.svg";
    window.onscroll = function(){orangenavbar()};
}


window.onscroll = function(){orangenavbar()};

function orangenavbar(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "#e66d42";
        document.getElementById('nav1').style.fontSize = "14px";
        document.getElementById('nav1').style.textShadow = "0 1px 0 white";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "#e66d42";
        document.getElementById('nav2').style.fontSize = "14px";
        document.getElementById('nav2').style.textShadow = "0 1px 0 white";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "#e66d42";
        document.getElementById('nav3').style.fontSize = "14px";
        document.getElementById('nav3').style.textShadow = "0 1px 0 white";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "#e66d42";
        document.getElementById('nav4').style.fontSize = "14px";
        document.getElementById('nav4').style.textShadow = "0 1px 0 white";

    }
    else{
        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "white";
        document.getElementById('nav1').style.fontSize = "18px";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "white";
        document.getElementById('nav2').style.fontSize = "18px";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "white";
        document.getElementById('nav3').style.fontSize = "18px";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "white";
        document.getElementById('nav4').style.fontSize = "18px";

    }
}
function bluenavbar(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "#82ACFF";
        document.getElementById('nav1').style.fontSize = "14px";
        document.getElementById('nav1').style.textShadow = "0 1px 0 white";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "#82ACFF";
        document.getElementById('nav2').style.fontSize = "14px";
        document.getElementById('nav2').style.textShadow = "0 1px 0 white";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "#82ACFF";
        document.getElementById('nav3').style.fontSize = "14px";
        document.getElementById('nav3').style.textShadow = "0 1px 0 white";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "#82ACFF";
        document.getElementById('nav4').style.fontSize = "14px";
        document.getElementById('nav4').style.textShadow = "0 1px 0 white";

    }
    else{
        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "white";
        document.getElementById('nav1').style.fontSize = "18px";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "white";
        document.getElementById('nav2').style.fontSize = "18px";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "white";
        document.getElementById('nav3').style.fontSize = "18px";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "white";
        document.getElementById('nav4').style.fontSize = "18px";

    }
}
function purplenavbar(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "#892CDC";
        document.getElementById('nav1').style.fontSize = "14px";
        document.getElementById('nav1').style.textShadow = "0 1px 0 white";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "#892CDC";
        document.getElementById('nav2').style.fontSize = "14px";
        document.getElementById('nav2').style.textShadow = "0 1px 0 white";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "#892CDC";
        document.getElementById('nav3').style.fontSize = "14px";
        document.getElementById('nav3').style.textShadow = "0 1px 0 white";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "#892CDC";
        document.getElementById('nav4').style.fontSize = "14px";
        document.getElementById('nav4').style.textShadow = "0 1px 0 white";

    }
    else{
        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "white";
        document.getElementById('nav1').style.fontSize = "18px";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "white";
        document.getElementById('nav2').style.fontSize = "18px";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "white";
        document.getElementById('nav3').style.fontSize = "18px";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "white";
        document.getElementById('nav4').style.fontSize = "18px";

    }
}
function greennavbar(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "#30E3CA";
        document.getElementById('nav1').style.fontSize = "14px";
        document.getElementById('nav1').style.textShadow = "0 1px 0 white";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "#30E3CA";
        document.getElementById('nav2').style.fontSize = "14px";
        document.getElementById('nav2').style.textShadow = "0 1px 0 white";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "#30E3CA";
        document.getElementById('nav3').style.fontSize = "14px";
        document.getElementById('nav3').style.textShadow = "0 1px 0 white";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "#30E3CA";
        document.getElementById('nav4').style.fontSize = "14px";
        document.getElementById('nav4').style.textShadow = "0 1px 0 white";

    }
    else{
        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "white";
        document.getElementById('nav1').style.fontSize = "18px";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "white";
        document.getElementById('nav2').style.fontSize = "18px";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "white";
        document.getElementById('nav3').style.fontSize = "18px";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "white";
        document.getElementById('nav4').style.fontSize = "18px";

    }
}


function proj1link() {

    navigator.clipboard.writeText("https://github.com/Udit-Gogia/WEB-DEV-PROJECT-RRBT");
    swal("WEB-DEV-PROJECT-RRBT's Github Link copied!", {
        button: "Cool!",
        timer: 3000,
    });
}
function proj2link(){
    navigator.clipboard.writeText("https://github.com/Udit-Gogia/Rock-Paper-Scissor");
    swal("Rock Paper Scissor's Github Link copied!",{
        button: "Cool!",
        timer:3000,
    });
}

function proj3link(){

    navigator.clipboard.writeText("https://github.com/Udit-Gogia/PRIME_VIDEO-CLONE");
    swal("Prime Video's Github Link copied!",{
        button: "Cool!",
        timer:3000,
    });
}


