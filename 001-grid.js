const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [2048, 2048]
  // dimensions: 'A4',
  // pixelsPerInch: 300
};

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 50;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push([u, v]);
      }
    }
    return points;
  };

  random.setSeed(5);
  const points = createGrid().filter(() => random.value() > 0.5);
  const margin = 400;

  return ({ context, width, height }) => {
    // context.fillStyle = '#3478fc';
    // context.fillStyle = '#382c93';
    // context.fillStyle = '#f1a90d';
    // context.fillStyle = '#ee89ad';
    // context.fillStyle = '#983266';
    context.fillStyle = '#3b8f77';
    context.fillRect(0, 0, width, height);

    points.forEach(([u, v]) => {
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, 10, 0, Math.PI * 2, false);
      context.fillStyle = '#fff';
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
