import * as canvas from "canvas";
import * as fileSystem from "fs";

const width = 64;
const height = 64;
const text = "D";

const sampleCanvas = canvas.createCanvas(width, height);
const context = sampleCanvas.getContext("2d");

context.fillStyle = "#000000";

context.fillRect(0, 0, width, height);

context.fillStyle = "#ffffff";
context.font = "48px serif";
const textMetrics = context.measureText(text);

const textHeight =
  textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
console.log(textMetrics.width, textHeight);
context.fillText(
  text,
  (width - textMetrics.width) / 2,
  (height - textHeight) / 2 + textMetrics.actualBoundingBoxAscent
);
context.beginPath();

context.strokeStyle = "#ff0000";
context.lineTo(0, height / 2);
context.lineTo(width, height / 2);
context.stroke();
fileSystem.writeFile("sample.png", sampleCanvas.toBuffer("image/png"), () => {
  console.log("ok");
});
