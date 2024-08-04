function drawTime(ctx, radius) {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours % 12;
  hours = (hours * Math.PI/6) + (minutes * Math.PI/6) / 60 + (seconds * Math.PI/6) / 3600;
  drawHands(ctx, hours, radius * 0.07, -radius * 0.5);
  minutes = (minutes * Math.PI) / 30 + (seconds * Math.PI) / (30 * 60);
  drawHands(ctx, minutes, radius * 0.05, -radius * 0.75);
  seconds = seconds * Math.PI / 30;
  drawHands(ctx, seconds, radius * 0.01, -radius * 0.83);
}

function drawHands(ctx, pos, width, length) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#333";
  ctx.lineCap = "round";
  ctx.rotate(pos);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, length);
  ctx.stroke();
  ctx.restore();
}

export { drawTime }