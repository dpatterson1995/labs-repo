let actualTemp = 60;

let desiredTemp = 70;

if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else if (actualTemp < desiredTemp) {
  console.log("Run Heat");
} else if (actualTemp === desiredTemp) {
  console.log("Standby");
}
