/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class


        */

// let flight = document.getElementById("flight");
// console.log("flight", flight);


document.querySelector("#activate-flight").addEventListener("click", (event) => {
    flight.classList.add("enabled");
    flight.classList.remove("disabled");
    console.log("What is this event", event);
});



/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


var mindReading = document.getElementById("mindreading");

document.querySelector("#activate-mindreading").addEventListener("click", (event) => {
    mindReading.classList.add("enabled");
    mindReading.classList.remove("disabled");
    console.log("what is this event?", event);
});

var xrayButton = document.getElementById("xray");

document.querySelector("#activate-xray").addEventListener("click", (event) => {
    xrayButton.classList.add("enabled");
    xrayButton.classList.remove("disabled");
});





/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

// let enableAll = document.querySelectorAll(`<section>`);
//     document.querySelector("#activate-all").addEventListener("click", (event) => {
//         enableAll.classList.add("enabled");
//         enableAll.classList.remove("disabled");

//     });

let activateAll = document.querySelectorAll(".power")
document.querySelector("#activate-all")
.addEventListener("click", (event) => {
    for (let i = 0; i < activateAll.length; i++) {
        const element = activateAll[i];
        if (element.classList.contains("disabled"))
        element.classList.remove("disabled");
        element.classList.add("enabled");
    }
});

    let deactivateAll = document.querySelectorAll(".power")
    document.querySelector("#deactivate-all")
    .addEventListener("click", (event) => {
        for (let i = 0; i < deactivateAll.length; i++) {
            const element = deactivateAll[i];
            if (element.classList.contains("enabled"))
            element.classList.remove("enabled");
            element.classList.add("disabled");
        }
    });

 



// document.querySelector("#activate-all").addEventListener("click", (event) => {
//     enableAll.classList.add("power_enabled");
//     console.log("Ths event just happened", event);
// });

// function handleClick(event){
//     console.log("What event is happening?", event)
// }