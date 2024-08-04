function drawClockFace(ctx, radius) {
  // Central circle
  ctx.fillStyle = "whitesmoke";
  ctx.beginPath();
  radius = radius * 0.9;
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fill();
  // Middle small circle
  ctx.beginPath();
  ctx.fillStyle = "#333";
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fill();
  // Clock holder
  const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "#ffffff");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

export { drawClockFace }