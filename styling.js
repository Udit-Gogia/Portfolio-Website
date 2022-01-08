function ColorIcons(rang){
    document.getElementById('edu-logo').src = `/images/edu/edu-${rang}.png`;
    document.getElementById('aim-logo').src = `/images/aim/aim-${rang}.png`;
    document.getElementById('learning-logo').src = `/images/learning/learning-${rang}.png`;
    document.getElementById('music-logo').src = `/images/music/music-${rang}.png`;
    document.getElementById('car-logo').src = `/images/car/car-${rang}.png`;
    document.getElementById('aboutimg').src = `images/about/about-${rang}.svg`;
    document.getElementById('icon-mail').src = `/images/email/mail-${rang}.svg`;
    document.getElementById('icon-insta').src = `/images/instagram/insta-${rang}.svg`;
    document.getElementById('icon-github').src = `/images/github/github-${rang}.svg`;
    document.getElementById('icon-linkedin').src = `/images/linkedin/linkedin-${rang}.svg`;
    console.log(`color is ${rang}`)
}

function applygreen(){
    document.querySelector(':root').style = " --default: #30E3CA";
    window.onscroll = function(){greennavbar()};
    ColorIcons("green");
}
function applyblue(){
    document.querySelector(':root').style = " --default: #82ACFF";
    window.onscroll = function(){bluenavbar()};
    ColorIcons("blue");
}
function applypurple(){
    document.querySelector(':root').style = " --default: #892CDC";
    window.onscroll = function(){purplenavbar()};
    ColorIcons("purple");
}
function applyorange(){
    document.querySelector(':root').style = " --default: #e66d42";
    window.onscroll = function(){orangenavbar()};
    ColorIcons("orng");
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


