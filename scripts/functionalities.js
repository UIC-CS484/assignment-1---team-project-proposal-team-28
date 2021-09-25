var slider = document.getElementById("sliderId");
var button = document.getElementById("buttonId");
var body = document.body;
var darkTheme = false;


//Slider function that updates the fontSize each time the range changes
slider.oninput = function() {
    var text = Array.from(document.getElementsByClassName("text"));

    text.forEach(element => {
        element.style.fontSize = (this.value/2)+"px";
    });
} 

//Toggle between light and dark mode
button.onclick = function() {
    var backboneColor = Array.from(document.getElementsByClassName("backbone"));
    var footerBoxColor = Array.from(document.getElementsByClassName("footerBoxColor"));

    darkTheme = !darkTheme;

    if (darkTheme) {
        body.style.color = 'white';
        body.style.backgroundColor = '#333333'
        button.innerHTML = 'Light mode';
        button.style.backgroundColor = '#828282';
    } else {
        body.style.color = 'black';
        body.style.backgroundColor = 'white'
        button.innerHTML = 'Dark mode';
        button.style.backgroundColor = '#555555';
    }

    backboneColor.forEach(element => {
        if (darkTheme) {
            element.style.backgroundColor = '#262525';
        } else {
            element.style.backgroundColor= '#dbdbdb';
        }
    });

    footerBoxColor.forEach(element => {
        if (darkTheme) {
            element.style.backgroundColor = '#333333';
        } else {
            element.style.backgroundColor= '#aaaaaa';
        }
    });

}