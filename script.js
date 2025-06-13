/* 
  What this app does:
  -------------------
  - Waits for the user to click the button
  - Picks a random compliment from a list
  - Displays the compliment inside the page
  - Adds a random image above the compliment to keep it fun
    (example image source: https://picsum.photos/600/400)
*/

// 1. Get the button and output area from the HTML
const compliment = document.getElementById("complimentBtn");
const complimentOutput = document.querySelector("#complimentOut");

// 2. Create a list of compliments to choose from
const complimentsArray = [
  "You have a natural ability to make people feel seen and appreciated.",
  "Your creativity adds something special to everything you touch.",
  "You’re not just smart—you’re insightful and thoughtful, too.",
  "Your kindness is contagious.",
  "You have a great sense of humor—it brightens the room!",
  "Your work ethic is inspiring to everyone around you.",
  "You ask great questions, and it shows you truly care.",
  "Your positive energy makes even tough days easier.",
  "You're the kind of person others feel lucky to know.",
  "You have a gift for solving problems in creative ways.",
  "Your smile makes people feel at ease.",
  "You listen with empathy and speak with intention.",
  "You bring out the best in people.",
  "You're brave for being authentically yourself.",
  "You turn ordinary moments into something memorable.",
];

// 3. Listen for a button click
compliment.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * complimentsArray.length);
  const randomCompliment = complimentsArray[randomIndex];
  const randomImageUrl = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;

  complimentOutput.innerHTML = `
    <img src="${randomImageUrl}" alt="Random image" style="max-width: 100%; border-radius: 8px;" />
    <p style="font-size: 1.2rem; margin-top: 10px;">${randomCompliment}</p>
  `;
});