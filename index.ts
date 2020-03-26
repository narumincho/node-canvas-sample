import * as canvas from "canvas";
import * as fileSystem from "fs";

const sampleCanvas = canvas.createCanvas(1600, 900);
const context = sampleCanvas.getContext("2d");
context.fillText("sample text サンプルの文字 骨", 0, 500);
fileSystem.writeFile("sample.png", sampleCanvas.toBuffer(), () => {
  console.log("ok");
});
