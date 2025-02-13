function changeColor() {
    document.getElementById("myDiv").style.color="red";
}

const newDiv = document.querySelector("#newDiv");

newDiv.addEventListener(
    'click', 
    () =>
    newDiv.style.color="blue"
);