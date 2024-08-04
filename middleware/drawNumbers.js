function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.15 + "px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (num = 1; num < 13; num++) {
    ctx.save();
    ang = num * Math.PI/6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.68)
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.restore();
  }
}


export { drawNumbers }