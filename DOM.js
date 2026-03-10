const result = document.getElementById("para");
result.innerHTML = "Hello, World!";
result.innerText = "Welcome to JavaScript DOM manipulation!";
const x = document.getElementsByClassName("p1");
const y = document.getElementsByTagName("p");
y[2].innerHTML = "This is the third paragraph.";
y[1].style.color = "blue";
y[1].innerHTML = "This is pet.";
console.log(x);
x[1].innerHTML = "This is the second paragraph.";
x[0].innerHTML = "This is the first paragraph.";
z = document.querySelector(".p1")
z.style.color = "red";
const t = document.querySelectorAll("ul li");
for(let x = 0; x < t.length; x++){
    t[x].style.color = "green";
}