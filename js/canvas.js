export const screen = document.querySelector("canvas");
export const brush = screen.getContext("2d");

export let correct = 0;
export let incorrect = 0;

export const paint = () => {
  brush.strokeStyle = "#000000";
  brush.lineWidth = 2;
  brush.beginPath();
  brush.moveTo(30, 110);
  brush.lineTo(200, 110);
  brush.closePath();
  brush.stroke();
  // brush.fillText("Hello World", 100, 50);

  if (incorrect === 1) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath;
    brush.moveTo(45, 110);
    brush.lineTo(45, 5);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 2) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(45, 5);
    brush.lineTo(130, 5);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 3) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 5);
    brush.lineTo(130, 20);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 4) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.arc(130, 30, 10, 0, 2 * Math.PI);
    brush.stroke();
  } else if (incorrect === 5) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 40);
    brush.lineTo(130, 80);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 6) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 80);
    brush.lineTo(120, 100);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 7) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 80);
    brush.lineTo(140, 100);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 8) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 50);
    brush.lineTo(150, 70);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 9) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 50);
    brush.lineTo(110, 70);
    brush.closePath();
    brush.stroke();
  }
};
