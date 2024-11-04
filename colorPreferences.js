// colorPreferences.js

// Create an array to store colors
let favoriteColors = [];

// Allow the user to input three colors
for (let i = 0; i < 3; i++) {
    const color = prompt(Enter color #${i + 1}:); // Prompt for user input
    favoriteColors.push(color); // Add the color to the array
    console.log("Updated Color List:", favoriteColors); // Log the updated list
}

// Optionally, print the final list of favorite colors
console.log("Final List of Favorite Colors:", favoriteColors)
