window.onscroll = function(){Navbar("#e66d42")};

function ColorIcons(rang){
    document.getElementById('edu-logo').src = `images/edu/edu-${rang}.png`;
    document.getElementById('aim-logo').src = `images/aim/aim-${rang}.png`;
    document.getElementById('learning-logo').src = `images/learning/learning-${rang}.png`;
    document.getElementById('music-logo').src = `images/music/music-${rang}.png`;
    document.getElementById('car-logo').src = `images/car/car-${rang}.png`;
    document.getElementById('aboutimg').src = `images/about/about-${rang}.svg`;
    document.getElementById('icon-mail').src = `images/email/mail-${rang}.svg`;
    document.getElementById('icon-insta').src = `images/instagram/insta-${rang}.svg`;
    document.getElementById('icon-github').src = `images/github/github-${rang}.svg`;
    document.getElementById('icon-linkedin').src = `images/linkedin/linkedin-${rang}.svg`;
}

function applygreen(){
    document.querySelector(':root').style = " --default: #30E3CA";
    window.onscroll = function(){Navbar("#30E3CA")};
    ColorIcons("green");
    Navbar("#30E3CA");


}
function applyblue(){
    document.querySelector(':root').style = " --default: #82ACFF";
    window.onscroll = function(){Navbar("#82ACFF")};
    ColorIcons("blue");
    Navbar("#82ACFF");

}
function applypurple(){
    document.querySelector(':root').style = " --default: #892CDC";
    window.onscroll = function(){Navbar("#892CDC")};
    ColorIcons("purple");
    Navbar("#892CDC");

}
function applyorange(){
    document.querySelector(':root').style = " --default: #e66d42";
    window.onscroll = function(){Navbar("#e66d42")};
    ColorIcons("orng");
    Navbar("#e66d42");

}

window.onscroll = function(){Navbar("#e66d42")};

function Navbar(rang){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = `${rang}`;
        document.getElementById('nav1').style.fontSize = "14px";
        document.getElementById('nav1').style.textShadow = "0 1px 0 white";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = `${rang}`;
        document.getElementById('nav2').style.fontSize = "14px";
        document.getElementById('nav2').style.textShadow = "0 1px 0 white";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = `${rang}`;
        document.getElementById('nav3').style.fontSize = "14px";
        document.getElementById('nav3').style.textShadow = "0 1px 0 white";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = `${rang}`;
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


