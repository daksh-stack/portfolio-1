import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let clouds = [];
        let shootingStars = [];
        let moon = { x: 0, y: 0, size: 60 }; // Reduced size slightly for better proportion
        let mouse = { x: 0, y: 0 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Position moon in top-right quadrant
            moon.x = canvas.width * 0.85;
            moon.y = canvas.height * 0.2;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        resizeCanvas();

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5;
                this.opacity = Math.random();
                this.speed = Math.random() * 0.02 + 0.005;
            }

            update() {
                this.opacity += this.speed;
                if (this.opacity > 1 || this.opacity < 0) {
                    this.speed = -this.speed;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        class Cloud {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * (canvas.height * 0.5); // Top half only
                this.speed = Math.random() * 0.2 + 0.1;
                this.size = Math.random() * 50 + 50;
                this.opacity = Math.random() * 0.1 + 0.05;
            }

            update() {
                this.x += this.speed;
                if (this.x > canvas.width + 100) {
                    this.x = -100;
                    this.y = Math.random() * (canvas.height * 0.5);
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.arc(this.x + this.size * 0.5, this.y - this.size * 0.2, this.size * 0.8, 0, Math.PI * 2);
                ctx.arc(this.x + this.size * 1.2, this.y + this.size * 0.1, this.size * 0.9, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
                ctx.fill();
            }
        }

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * (canvas.height * 0.3);
                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 6;
                this.angle = Math.PI / 4; // 45 degrees
                this.opacity = 0;
                this.active = false;
                this.timer = Math.random() * 500; // Random delay
            }

            update() {
                if (this.timer > 0) {
                    this.timer--;
                    return;
                }

                if (!this.active) {
                    this.active = true;
                    this.opacity = 1;
                }

                this.x -= this.speed;
                this.y += this.speed;
                this.opacity -= 0.02;

                if (this.opacity <= 0 || this.x < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                if (!this.active) return;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y - this.length);
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }

        const initElements = () => {
            stars = [];
            clouds = [];
            shootingStars = [];

            // Stars
            for (let i = 0; i < 200; i++) {
                stars.push(new Star());
            }

            // Clouds
            for (let i = 0; i < 5; i++) {
                clouds.push(new Cloud());
            }

            // Shooting Stars
            for (let i = 0; i < 2; i++) {
                shootingStars.push(new ShootingStar());
            }
        };

        const drawMoon = () => {
            // Parallax effect (subtle)
            const moveX = (mouse.x - window.innerWidth / 2) * 0.01;
            const moveY = (mouse.y - window.innerHeight / 2) * 0.01;

            const moonX = moon.x + moveX;
            const moonY = moon.y + moveY;

            // Moon Glow (Outer)
            const gradient = ctx.createRadialGradient(moonX, moonY, moon.size, moonX, moonY, moon.size * 4);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(moonX, moonY, moon.size * 4, 0, Math.PI * 2);
            ctx.fill();

            // Moon Body
            ctx.beginPath();
            ctx.arc(moonX, moonY, moon.size, 0, Math.PI * 2);
            ctx.fillStyle = '#e2e8f0'; // Silver
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
            ctx.shadowBlur = 0;

            // Craters
            ctx.fillStyle = 'rgba(160, 174, 192, 0.5)'; // Darker silver
            ctx.beginPath();
            ctx.arc(moonX - 15, moonY - 10, 10, 0, Math.PI * 2);
            ctx.arc(moonX + 20, moonY + 15, 8, 0, Math.PI * 2);
            ctx.arc(moonX - 5, moonY + 30, 6, 0, Math.PI * 2);
            ctx.fill();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            stars.forEach(star => {
                star.update();
                star.draw();
            });

            // Draw Moon (Behind clouds)
            drawMoon();

            // Draw Clouds
            clouds.forEach(cloud => {
                cloud.update();
                cloud.draw();
            });

            // Draw Shooting Stars
            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initElements();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)', // Pure black to dark gray
                pointerEvents: 'none',
            }}
        />
    );
};

export default BackgroundAnimation;
