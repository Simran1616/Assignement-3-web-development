/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Initialize cost per day - let's start with the full day rate
let costPerDay = 35;
// Initialize the count of selected days
let dayCounter = 0;

// Get references to HTML elements
const dayButtons = document.querySelectorAll(".day-selector li"); // Assuming days are list items within an element with class 'day-selector'
const clearButton = document.getElementById("clear-button"); // Assuming a button with id 'clear-button'
const halfDayButton = document.getElementById("half"); // Assuming a button with id 'half'
const fullDayButton = document.getElementById("full"); // Assuming a button with id 'full'
const calculatedCostElement = document.getElementById("calculated-cost"); // Assuming an element with id 'calculated-cost' to display the total

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotal() {
  // Calculate the total cost
  const totalCost = costPerDay * dayCounter;
  // Update the display element with the calculated cost
  calculatedCostElement.innerHTML = totalCost;
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Add click event listener to each day button
dayButtons.forEach(button => {
    button.addEventListener("click", function() {
      // Check if the button does NOT already have the 'clicked' class
      if (!button.classList.contains("clicked")) {
        // Add the 'clicked' class
        button.classList.add("clicked");
        // Increment the counter for selected days
        dayCounter += 1;
      }
      // Recalculate the total cost regardless of whether the day was already clicked
      // (This ensures the cost updates if the rate changes after selecting days)
      calculateTotal();
    });
  });

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Add click event listener to the clear button
clearButton.addEventListener("click", function() {
    // Remove 'clicked' class from all day buttons
    dayButtons.forEach(button => {
      // Check if the button currently has the 'clicked' class before removing and decrementing
      if (button.classList.contains("clicked")) {
          button.classList.remove("clicked");
      }
    });
    // Reset the day counter
    dayCounter = 0;
    // Recalculate the total cost (which will now be 0)
    calculateTotal();
  });

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Add click event listener to the half-day button
halfDayButton.addEventListener("click", function() {
    // Set the rate for half days
    costPerDay = 20;
    // Add 'clicked' class to half-day button
    halfDayButton.classList.add("clicked");
    // Remove 'clicked' class from full-day button
    fullDayButton.classList.remove("clicked");
    // Recalculate the total cost with the new rate
    calculateTotal();
  });

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Add click event listener to the full-day button
fullDayButton.addEventListener("click", function() {
    // Set the rate for full days
    costPerDay = 35;
    // Add 'clicked' class to full-day button
    fullDayButton.classList.add("clicked");
    // Remove 'clicked' class from half-day button
    halfDayButton.classList.remove("clicked");
    // Recalculate the total cost with the new rate
    calculateTotal();
  });

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Run calculateTotal once when the script loads to initialize the cost display (should be 0)
calculateTotal();
// Ensure the full day button starts as 'clicked' visually if it's the default rate
// Make sure half day isn't also clicked initially
halfDayButton.classList.remove("clicked");
fullDayButton.classList.add("clicked");