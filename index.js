import { drawClockFace } from "./middleware/drawClockface.js";
import { drawNumbers } from "./middleware/drawNumbers.js";
import { drawMarkingHours } from "./middleware/drawMarkingHours.js";
import { drawMarkingMinutes } from "./middleware/drawMarkingMinutes.js";
import { drawTime } from "./middleware/drawTime.js";


const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);

function drawClock() {
  drawClockFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawMarkingHours(ctx, radius);
  drawMarkingMinutes(ctx, radius);
  drawTime(ctx, radius);
}

drawClock();
setInterval(drawClock, 1000)








