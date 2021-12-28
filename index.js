let data = {
    "boxes": [
        {
            "id": "1",
            "title": "Coffee Mug",
            "paragraph": "The best coffee mug ever",
            "top" : 12,
            "bottom": 27,
            "left": 21,
            "right": 33,
            "url": "#"
        },
        {
            "id": "2",
            "title": "Mouse",
            "paragraph": "The best mouse ever",
            "top" : 25,
            "bottom": 51,
            "left": 23,
            "right": 32,
            "url": "#"
        },
        {
            "id": "3",
            "title": "Pens",
            "paragraph": "The best pens ever",
            "top" : 20,
            "bottom": 51,
            "left": 16,
            "right": 23,
            "url": "#"
        },
        {
            "id": "4",
            "title": "Notebook",
            "paragraph": "The best notebook ever",
            "top" : 14,
            "bottom": 51,
            "left": 1,
            "right": 15,
            "url": "#"
        },
        {
            "id": "5",
            "title": "Magnifying Glass",
            "paragraph": "The best magnifying glass ever",
            "top" : 3,
            "bottom": 18,
            "left": 1,
            "right": 25,
            "url": "#"
        },
        {
            "id": "6",
            "title": "Computer",
            "paragraph": "The best computer ever",
            "top" : 1,
            "bottom": 32,
            "left": 32,
            "right": 51,
            "url": "#"
        },
    ]
};

// main overlay of the picture  
let overlay = document.getElementsByClassName("highlight-overlay")[0];

// the overlay layers, makes the rest of the picture slightly grayed
let topLayer = document.getElementsByClassName("top-layer")[0];
let bottomLayer = document.getElementsByClassName("bottom-layer")[0];
let leftLayer = document.getElementsByClassName("left-layer")[0];
let rightLayer = document.getElementsByClassName("right-layer")[0];

// selecting the text on the page that will be altered
let captions = document.getElementsByClassName("caption")[0];
let button = document.getElementsByClassName("button")[0];

// for each item in the data list
for (let i = 0; i < data.boxes.length; i++) {
    let boxes = data.boxes[i];

    // create the box to add the hover event to
    let box = document.createElement("div");
    box.setAttribute("style", `grid-column:${boxes.left}/${boxes.right}; grid-row: ${boxes.top}/${boxes.bottom};`);
    box.setAttribute("id", `box${boxes.id}`);

    overlay.appendChild(box);

    // hover event, 
    box.addEventListener("mouseover", function( event ) {

        // set dimensions
        topLayer.setAttribute("style", `grid-column:1/51; grid-row: 1/${boxes.top}; background-color: lightgray; animation: fadein 0.5s;`);
        bottomLayer.setAttribute("style", `grid-column:1/51; grid-row: ${boxes.bottom}/51; background-color: lightgray; animation: fadein 0.5s;`);
        leftLayer.setAttribute("style", `grid-column:1/${boxes.left}; grid-row: 1/51; background-color: lightgray; animation: fadein 0.5s;`);
        rightLayer.setAttribute("style", `grid-column:${boxes.right}/51; grid-row: 1/51; background-color: lightgray; animation: fadein 0.5s;`);


        // set text 
        let title = document.getElementsByClassName("paragraphTitle")[0];
        title.setAttribute("style", "animation: fadein 0.5s;");
        title.innerHTML = `${boxes.title}`;
    
        let paragraph = document.getElementsByClassName("paragraphText")[0];
        paragraph.setAttribute("style", "animation: fadein 0.5s;");
        paragraph.innerHTML = `${boxes.paragraph}`;

        button.setAttribute("style", "display: block;");
        button.innerHTML = "Learn More";
        button.href=`${boxes.url}`;

        captions.appendChild(button);

    }, false);

    // after the mouse leaves
    box.addEventListener("mouseleave", function( event ) { 
        // select the box layers
        let boxTop = document.getElementsByClassName('top-layer')[0];
        let boxBottom = document.getElementsByClassName('bottom-layer')[0];
        let boxLeft = document.getElementsByClassName('left-layer')[0];
        let boxRight = document.getElementsByClassName('right-layer')[0];

        // fades the layers out 
        boxTop.setAttribute("style", `grid-column:1/51; grid-row: 1/${boxes.top}; background-color: lightgray; visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity  0.5s linear;`);
        boxBottom.setAttribute("style", `grid-column:1/51; grid-row: ${boxes.bottom}/51; background-color: lightgray; visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity  0.5s linear;`);
        boxLeft.setAttribute("style", `grid-column:1/${boxes.left}; grid-row: 1/51; background-color: lightgray; visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity  0.5s linear;`);
        boxRight.setAttribute("style", `grid-column:${boxes.right}/51; grid-row: 1/51; background-color: lightgray; visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity  0.5s linear;`);

        // reset the text, fade out animation
        let title = document.getElementsByClassName("paragraphTitle")[0];
        title.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity  0.5s linear;");

        let paragraph = document.getElementsByClassName("paragraphText")[0];
        paragraph.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity  0.5s linear;");

    }, false);
};


