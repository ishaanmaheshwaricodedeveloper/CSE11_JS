function onCLick() {
    console.log("You clicked the button");
}
function onMouseOver() {
    console.log("You hovered over the button");
}
function onMouseOut() {
    console.log("You stopped hovering over the button");
}
function onMouseDown() {
    console.log("You pressed the button");
}
function onMouseUp() {
    console.log("You released the button");
}
function onMouseMove() {
    console.log("You moved the mouse");
}
function ondoubleClick() {
    console.log("You double clicked the button");
}
const inp = document.querySelector("input");
if(inp)
    {
inp.addEventListener('focus',onhandlefocus);
inp.addEventListener('blur',onhandleblur);
    }
function onhandlefocus() {
    console.log("You focused on the input");
}
function onhandleblur() {
    console.log("You blurred the input");
}
function onLoad() {
    alert("Page loaded");
}
// members[0].powers[2]
