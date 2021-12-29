// Splitting({
//     whitespace: true
// });


let rotatingAction = document.getElementById("warped");
let rotatingActionIcon = document.getElementById("wapred-icon");
let rotatingSpanItems = document.getElementsByClassName("span");

rotatingAction.addEventListener("mouseover", function(event) {

    for (let i = 0; i < rotatingSpanItems.length; i++) {

        console.log(rotatingSpanItems[i]);

        rotatingSpanItems[i].setAttribute("style", "color: black; -webkit-transition: all .3s ease-in-out; -moz-transition: all 1.0s ease-in-out;");
        // rotatingAction.setAttribute("style", " -webkit-animation:spin 5s linear infinite; -moz-animation:spin 5s linear infinite; animation:spin 5s linear infinite; -webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;")

        rotatingSpanItems[i];
    }

});

rotatingAction.addEventListener("mouseleave", function(event) {
    for (let i = 0; i < rotatingSpanItems.length; i++) {

        console.log(rotatingSpanItems[i]);

        rotatingSpanItems[i].setAttribute("style", "color: red; -webkit-transition: all .3s ease-in-out; -moz-transition: all 1.0s ease-in-out;");
        // rotatingAction.setAttribute("style", " -webkit-animation:spin 15s linear infinite; -moz-animation:spin 15s linear infinite; animation:spin 15s linear infinite;")

        rotatingSpanItems[i];
    }

});

// dunkin- 8016455210

