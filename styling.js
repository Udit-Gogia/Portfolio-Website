function applygreen(){
    document.getElementById('edu-logo').src = "edu-green.png";
    document.getElementById('aim-logo').src = "aim-green.png";
    document.getElementById('learning-logo').src = "learning-green.png";
    document.getElementById('music-logo').src = "music-green.png";
    document.getElementById('car-logo').src = "car-green.png";
    document.getElementById('aboutimg').src = "about-green.svg";
    document.getElementById('icon-mail').src = "mail-green.svg";
    document.getElementById('icon-insta').src = "insta-green.svg";
    document.getElementById('icon-github').src = "github-green.svg";
    document.getElementById('icon-linkedin').src = "linkedin-green.svg";
    document.querySelector(':root').style = " --default: #30E3CA";
    window.onscroll = function(){greennavbar()};
}
function applyblue(){
    document.getElementById('edu-logo').src = "edu-blue.png";
    document.getElementById('aim-logo').src = "aim-blue.png";
    document.getElementById('learning-logo').src = "learning-blue.png";
    document.getElementById('music-logo').src = "music-blue.png";
    document.getElementById('car-logo').src = "car-blue.png";
    document.getElementById('aboutimg').src = "about-blue.svg";
    document.getElementById('icon-mail').src = "mail-blue.svg";
    document.getElementById('icon-insta').src = "insta-blue.svg";
    document.getElementById('icon-github').src = "github-blue.svg";
    document.getElementById('icon-linkedin').src = "linkedin-blue.svg";
    document.querySelector(':root').style = " --default: #82ACFF";
    window.onscroll = function(){bluenavbar()};
}
function applypurple(){
    document.getElementById('edu-logo').src = "edu-purple.png";
    document.getElementById('aim-logo').src = "aim-purple.png";
    document.getElementById('learning-logo').src = "learning-purple.png";
    document.getElementById('music-logo').src = "music-purple.png";
    document.getElementById('car-logo').src = "car-purple.png";
    document.getElementById('aboutimg').src = "about-purple.svg";
    document.getElementById('icon-mail').src = "mail-purple.svg";
    document.getElementById('icon-insta').src = "insta-purple.svg";
    document.getElementById('icon-github').src = "github-purple.svg";
    document.getElementById('icon-linkedin').src = "linkedin-purple.svg";
    document.querySelector(':root').style = " --default: #892CDC";
    window.onscroll = function(){purplenavbar()};
}
function applyorange(){
    document.getElementById('edu-logo').src = "edu.png";
    document.getElementById('aim-logo').src = "aim.png";
    document.getElementById('learning-logo').src = "learning.png";
    document.getElementById('music-logo').src = "music.png";
    document.getElementById('car-logo').src = "car.png";
    document.getElementById('aboutimg').src = "about.svg";
    document.getElementById('icon-mail').src = "mail-orng.svg";
    document.getElementById('icon-insta').src = "insta-orng.svg";
    document.getElementById('icon-github').src = "github-orng.svg";
    document.getElementById('icon-linkedin').src = "linkedin-orng.svg";
    document.querySelector(':root').style = " --default: #e66d42";
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

    navigator.clipboard.writeText("https://github.com/Udit-Gogia/JS-Drum-Kit-");
    swal("Drum Kit JS Project's Github Link Copied", {
        button: "Cool!",
        timer: 3000,
    });
}
function proj2link(){
    navigator.clipboard.writeText("https://github.com/Udit-Gogia/Rock-Paper-Scissor");
    swal("Rock Paper Scissor's Github Link Copied!",{
        button: "Cool!",
        timer:3000,
    });
}

function proj3link(){

    navigator.clipboard.writeText("https://github.com/Udit-Gogia/WEB-DEV-PROJECT-RRBT");
    swal("Rolls Royce Boat Tail's Github Link Copied!",{
        button: "Cool!",
        timer:3000,
    });
}


