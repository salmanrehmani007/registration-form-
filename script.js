// js for text area 
const area = document.getElementById("area");
area.addEventListener("focus", function() {
    area.style.background = "black" ;
});
area.addEventListener("blur", function(){
    area.style.background = "white";
    area.style.color = "black";
});
// js for nationality 
const inputs = document.getElementsByTagName("input");
        
// Loop through all input elements
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function() {
        this.style.background = "black"; // Change the background of the focused input
    });

    inputs[i].addEventListener("blur", function() {
        this.style.background = ""; // Reset the background when focus is lost
        this.style.color = "black";
      });
};
// js for dropdown menu 
const selectElement = document.getElementById("nationality");

// Change background color on focus
selectElement.addEventListener("focus", function() {
    this.style.background = "black";
    this.style.color = "white"; // Change text color for better visibility
});

// Change background color on change
// selectElement.addEventListener("change", function() {
//     this.style.background = "green"; // Change to a different color when an option is selected
// });

// Reset background color when it loses focus
selectElement.addEventListener("blur", function() {
    this.style.background = "white"; // Reset to original
    this.style.color = "black"; // Reset text color
});