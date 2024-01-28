var counter = 0;


document.querySelector(".increase").addEventListener("click", increaseCounter);

document.querySelector(".decrease").addEventListener("click", decreaseCounter);

document.querySelector(".reset").addEventListener("click", reset);



function increaseCounter() {
    counter++;
    document.querySelector(".counterChange").innerHTML = counter;

}

function decreaseCounter() {

    counter--;
    document.querySelector(".counterChange").innerHTML = counter;

}

function reset() {
    counter = 0;
    if (counter == 0) {
        document.querySelector(".counterChange").innerHTML = counter;
    }


}

