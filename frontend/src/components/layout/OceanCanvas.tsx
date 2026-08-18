import React, { useEffect, useRef } from 'react';

export const OceanCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Light Theme Wave parameters
    let step = 0;
    const waves = [
      { length: 0.004, amplitude: 14, speed: 0.012, color: 'rgba(210, 230, 240, 0.35)' },
      { length: 0.007, amplitude: 20, speed: 0.008, color: 'rgba(240, 225, 200, 0.25)' },
      { length: 0.003, amplitude: 24, speed: 0.015, color: 'rgba(13, 61, 77, 0.04)' },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 1;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x < width; x += 10) {
          const y = Math.sin(x * wave.length + step * wave.speed) * wave.amplitude + (height * 0.75);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
