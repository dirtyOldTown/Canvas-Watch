function drawMarkingMinutes(ctx, radius) {
  let num;
  let ang;
  for (num = 1; num <=60; num++) {
    ctx.lineWidth = radius * 0.01;
    ctx.strokeStyle = "#333";
    ctx.save();
    ang = num * Math.PI/30;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.80);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -5);
    ctx.stroke();
    ctx.restore();
  }
}

export { drawMarkingMinutes }