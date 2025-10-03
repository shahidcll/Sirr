import React, { useRef, useEffect, useContext } from 'react';
import { AnimationContext } from '../contexts/AnimationContext';

const AnimatedCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const streaksRef = useRef<any[]>([]);
  const timeRef = useRef(0);
  const dragRef = useRef({ dragging: false, lastX: 0 });
  
  const { controls } = useContext(AnimationContext);

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    // Streak constructor
    function Streak() {
      this.reset(true);
    }

    Streak.prototype.reset = function(initial: boolean) {
      this.x = rand(0, W);
      this.y = H + rand(0, H * 0.35);
      this.len = rand(160, 480);
      this.baseSpeed = rand(0.25, 1.6) + W / 2000;
      this.width = rand(1.2, 4.2);
      this.hueBase = rand(0, 360);
      this.amplitude = rand(16, 110);
      this.freq = rand(0.0025, 0.009);
      this.offset = rand(0, Math.PI * 2);
      if (!initial) this.y = H + rand(0, H * 0.3);
    };

    Streak.prototype.step = function(t: number) {
      this.speed = this.baseSpeed * controls.speedFactor;
      this.y -= this.speed;
      if (this.y < -this.len - 60) this.reset(false);
    };

    Streak.prototype.draw = function(t: number) {
      ctx.beginPath();
      for (let i = 0; i < this.len; i += 2) {
        const y = this.y + i;
        const x = this.x + Math.sin((y + t) * this.freq + this.offset) * this.amplitude;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.lineWidth = this.width;
      let progress = (t * 0.02) % 360;
      let hue = (this.hueBase + progress) % 360;
      
      // Apply palette colors
      if (controls.palette === 'cyan') hue = 195 + Math.sin(t * 0.001 + this.offset) * 10;
      if (controls.palette === 'purple') hue = 260 + Math.sin(t * 0.0008 + this.offset) * 12;
      if (controls.palette === 'industrial') hue = 200 + Math.sin(t * 0.001 + this.offset) * 8;
      if (controls.palette === 'green') hue = 120 + Math.sin(t * 0.001 + this.offset) * 15;
      if (controls.palette === 'yellow') hue = 60 + Math.sin(t * 0.001 + this.offset) * 10;
      if (controls.palette === 'red') hue = 0 + Math.sin(t * 0.001 + this.offset) * 15;
      
      if (controls.palette === 'shuffle') {
        // Random color shuffle - each streak gets a different base color that changes over time
        const colorOptions = [195, 260, 120, 60, 0, 280, 320]; // cyan, purple, green, yellow, red, magenta, violet
        const colorIndex = Math.floor((t * 0.0005 + this.offset) * colorOptions.length) % colorOptions.length;
        hue = colorOptions[colorIndex] + Math.sin(t * 0.002 + this.offset) * 20;
      }
      
      if (controls.palette === 'rainbow') {
        const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.len);
        for (let k = 0; k < 6; k++) {
          const h = (hue + k * 60) % 360;
          grad.addColorStop(k / 5, `hsl(${h}, 90%, ${Math.max(30, controls.brightness * 0.5)}%)`);
        }
        ctx.strokeStyle = grad;
      } else {
        ctx.strokeStyle = `hsl(${Math.round(hue)}, 85%, ${Math.max(28, controls.brightness * 0.5)}%)`;
      }
      
      ctx.shadowBlur = Math.max(6, controls.brightness / 6);
      ctx.shadowColor = 'rgba(255,255,255,0.12)';
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const initStreaks = () => {
      streaksRef.current = [];
      const count = Math.max(4, controls.density, Math.floor(W / 160));
      for (let i = 0; i < count; i++) {
        streaksRef.current.push(new Streak());
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, W, H);
      
      // Background gradient
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'rgba(6,20,38,0.12)');
      g.addColorStop(1, 'rgba(4,10,18,0.18)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      
      if (!controls.running) return;
      
      timeRef.current += 0.9 * controls.speedFactor;
      streaksRef.current.forEach(s => {
        s.step(timeRef.current);
        s.draw(timeRef.current);
      });
    };

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initStreaks();
    };

    // Drag functionality
    const startDrag = (x: number) => {
      dragRef.current.dragging = true;
      dragRef.current.lastX = x;
    };

    const moveDrag = (x: number) => {
      if (!dragRef.current.dragging) return;
      const dx = x - dragRef.current.lastX;
      streaksRef.current.forEach(s => s.x += dx * 0.06);
      dragRef.current.lastX = x;
    };

    const endDrag = () => {
      dragRef.current.dragging = false;
    };

    // Event listeners
    canvas.addEventListener('mousedown', (e) => startDrag(e.clientX));
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('mousemove', (e) => moveDrag(e.clientX));
    window.addEventListener('resize', handleResize);

    initStreaks();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', endDrag);
    };
  }, [controls]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing"
    />
  );
};

export default AnimatedCanvas;