//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
lightBulbStatus === "On"
  ? (lightBulbStatus = "Light bulb is On.")
  : lightBulbStatus === "Off"
  ? (lightBulbStatus = "Light bulb is Off.")
  : lightBulbStatus === "Broken"
  ? (lightBulbStatus = "Light bulb is Broken.")
  : (lightBulbStatus = `“Please choose the correct input (On/Off/Broken)”`);

//Start coding here
console.log(lightBulbStatus);
