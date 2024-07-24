export function calcCoordsDots(
  width: number,
  height: number,
  pointsCount: number,
) {
  const r = width / 2;
  const coords = [];
  let startAngle = 145;

  for (let i = 0; i < pointsCount; i += 1) {
    const angle = 360 / pointsCount;
    const rad = Math.PI / 180;
    const x = width / 2 + r * Math.sin(startAngle * rad);
    const y = height / 2 + r * Math.cos(startAngle * rad);
    startAngle -= angle;
    coords.push({ x, y, val: i + 1 });
  }

  return coords;
}

export function calcAngle(n: number, active: number, max: number) {
  let next = 0;
  let prev = 0;
  let tmp = active;
  for (let i = 0; i < max; i += 1) {
    if (tmp !== n) {
      tmp += 1;
      if (tmp > max - 1) tmp = 0;
      next += 1;
    }
  }
  tmp = active;
  for (let k = 0; k < max; k += 1) {
    if (tmp !== n) {
      tmp -= 1;
      if (tmp < 0) tmp = max - 1;
      prev += 1;
    }
  }
  if (next <= prev) {
    return { next: false, step: next };
  }
  return { next: true, step: prev };
}
