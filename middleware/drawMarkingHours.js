function drawMarkingHours(ctx, radius) {
  let num;
  let ang;
  for (num = 1; num < 13; num++) {
    ctx.save();
    // Create one point
    ang = num * Math.PI/6;
    ctx.fillStyle = "#333";
    ctx.strokeStyle = "#333";
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.8);
    ctx.beginPath();
    ctx.moveTo(0,0);
    /*
    ctx.lineTo(-7, -7);
    ctx.lineTo(7,-7);
    ctx.fill();
   */
    ctx.lineWidth = radius * 0.03;
    ctx.lineTo(0, -7);
    ctx.stroke();
    ctx.restore();
  }
}

export { drawMarkingHours }