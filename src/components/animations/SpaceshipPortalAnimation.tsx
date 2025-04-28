
import React, { useEffect, useRef } from 'react';

const SpaceshipPortalAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Animation variables
    let frameId: number;
    let frame = 0;
    
    // Spaceship properties
    const spaceship = {
      x: -100,
      y: canvas.height / 2,
      width: 80,
      height: 40,
      speed: 2
    };
    
    // Portal properties
    const portal = {
      x: canvas.width - 150,
      y: canvas.height / 2,
      radius: 50,
      rotation: 0
    };
    
    // Gun/blaster properties
    const gun = {
      x: canvas.width / 2,
      y: canvas.height - 60,
      width: 40,
      height: 30
    };
    
    // Particles for the green substance
    const particles: {x: number, y: number, radius: number, speed: number, angle: number, alpha: number}[] = [];
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      
      // Draw starry background
      drawStars(ctx, canvas.width, canvas.height);
      
      // Draw and animate portal
      drawPortal(ctx, portal, frame);
      
      // Draw and animate spaceship
      drawSpaceship(ctx, spaceship);
      
      // Move spaceship
      if (spaceship.x < canvas.width + 100) {
        spaceship.x += spaceship.speed;
      } else {
        spaceship.x = -100; // Reset position
      }
      
      // Draw gun/blaster
      drawGun(ctx, gun);
      
      // Create green substance particles occasionally
      if (frame % 5 === 0) {
        createParticle(particles, gun);
      }
      
      // Update and draw particles
      updateParticles(ctx, particles);
      
      // Continue animation loop
      frameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);
  
  // Function to draw the starry background
  const drawStars = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw a dark background
    ctx.fillStyle = '#0E4B24';
    ctx.fillRect(0, 0, width, height);
    
    // Draw stars with a consistent pattern based on position
    for (let i = 0; i < 100; i++) {
      const x = (Math.sin(i * 13.7) * 0.5 + 0.5) * width;
      const y = (Math.cos(i * 7.3) * 0.5 + 0.5) * height;
      const size = Math.random() * 2 + 1;
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  // Function to draw the swirling portal
  const drawPortal = (ctx: CanvasRenderingContext2D, portal: {x: number, y: number, radius: number, rotation: number}, frame: number) => {
    portal.rotation += 0.05;
    
    // Draw the outer glow
    const gradient = ctx.createRadialGradient(
      portal.x, portal.y, portal.radius * 0.2,
      portal.x, portal.y, portal.radius * 1.5
    );
    gradient.addColorStop(0, 'rgba(60, 216, 97, 0.8)');
    gradient.addColorStop(0.5, 'rgba(23, 127, 61, 0.5)');
    gradient.addColorStop(1, 'rgba(14, 75, 36, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(portal.x, portal.y, portal.radius * 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw the portal swirl
    ctx.save();
    ctx.translate(portal.x, portal.y);
    ctx.rotate(portal.rotation);
    
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const innerRadius = portal.radius * 0.4;
      const outerRadius = portal.radius;
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, innerRadius, angle, angle + 0.3);
      ctx.arc(0, 0, outerRadius, angle + 0.3, angle);
      ctx.closePath();
      
      const color = i % 2 === 0 ? '#3CD861' : '#177F3D';
      ctx.fillStyle = color;
      ctx.fill();
    }
    
    // Draw center
    ctx.beginPath();
    ctx.arc(0, 0, portal.radius * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = '#DAFC4A';
    ctx.fill();
    
    ctx.restore();
  };
  
  // Function to draw the spaceship
  const drawSpaceship = (ctx: CanvasRenderingContext2D, spaceship: {x: number, y: number, width: number, height: number}) => {
    ctx.save();
    ctx.translate(spaceship.x, spaceship.y);
    
    // Main body
    ctx.fillStyle = '#8E9196';
    ctx.beginPath();
    ctx.ellipse(0, 0, spaceship.width / 2, spaceship.height / 3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Cockpit
    ctx.fillStyle = '#1EAEDB';
    ctx.beginPath();
    ctx.ellipse(-spaceship.width / 5, -spaceship.height / 8, spaceship.width / 6, spaceship.height / 5, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Engine glow
    ctx.fillStyle = 'rgba(249, 115, 22, 0.7)';
    ctx.beginPath();
    ctx.moveTo(-spaceship.width / 2 - 15, 0);
    ctx.lineTo(-spaceship.width / 2, -spaceship.height / 4);
    ctx.lineTo(-spaceship.width / 2, spaceship.height / 4);
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
  };
  
  // Function to draw the gun
  const drawGun = (ctx: CanvasRenderingContext2D, gun: {x: number, y: number, width: number, height: number}) => {
    ctx.save();
    ctx.translate(gun.x, gun.y);
    
    // Gun body
    ctx.fillStyle = '#1A1F2C';
    ctx.fillRect(-gun.width / 2, -gun.height / 2, gun.width, gun.height);
    
    // Barrel
    ctx.fillStyle = '#9F9EA1';
    ctx.fillRect(-gun.width / 8, -gun.height * 1.2, gun.width / 4, gun.height * 0.7);
    
    // Details
    ctx.fillStyle = '#8B5CF6';
    ctx.fillRect(-gun.width / 3, -gun.height / 3, gun.width / 8, gun.height / 8);
    
    ctx.restore();
  };
  
  // Function to create a new particle
  const createParticle = (
    particles: {x: number, y: number, radius: number, speed: number, angle: number, alpha: number}[],
    gun: {x: number, y: number, width: number, height: number}
  ) => {
    particles.push({
      x: gun.x,
      y: gun.y - gun.height,
      radius: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      angle: -Math.PI / 2 + (Math.random() * 0.5 - 0.25),
      alpha: 1
    });
    
    // Limit the number of particles
    if (particles.length > 50) {
      particles.shift();
    }
  };
  
  // Function to update and draw particles
  const updateParticles = (
    ctx: CanvasRenderingContext2D,
    particles: {x: number, y: number, radius: number, speed: number, angle: number, alpha: number}[]
  ) => {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      // Move particle
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      
      // Fade particle
      p.alpha -= 0.01;
      
      // Remove faded particles
      if (p.alpha <= 0) {
        particles.splice(i, 1);
        i--;
        continue;
      }
      
      // Draw particle
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      gradient.addColorStop(0, `rgba(218, 252, 74, ${p.alpha})`);
      gradient.addColorStop(0.7, `rgba(60, 216, 97, ${p.alpha * 0.8})`);
      gradient.addColorStop(1, `rgba(23, 127, 61, 0)`);
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  };
  
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SpaceshipPortalAnimation;
