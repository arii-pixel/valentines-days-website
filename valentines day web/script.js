Document.getElementById(“no-btn”).addEventListener(“mouseover”, moveNoButton); 

Document.getElementById(“yes-btn”).addEventListener(“click”, showFireworks); 

 

Function moveNoButton() { 

    C0nst noBtn = document.getElementById(“no-btn”); 

    Const x = Math.random() * (window.innerWidth – 100); 

    Const y = Math.random() * (window.innerHeight – 50); 

    noBtn.style.left = `${x}px`; 

    noBtn.style.top = `${y}px`; 

} 

 

Function showFireworks() { 

    Const canvas = document.getElementById(“fireworks”); 

    Const ctx = canvas.getContext(“2d”); 

    Canvas.width = window.innerWidth; 

    Canvas.height = window.innerHeight; 

 

    Let particles = []; 

    Function createHeartParticles(x, y) { 

        For (let I = 0; I < 30; i++) { 

            Particles.push({ 

                X: x, 

                Y: y, 

                Size: Math.random() * 8 + 2, 

                speedX: (Math.random() – 0.5) * 4, 

                speedY: (Math.random() – 0.5) * 4, 

                color: `hsl(${Math.random() * 360}, 100%, 60%)`, 

                life: 50 

            }); 

        } 

    } 

 

    Function drawHeart(x, y, size, color) { 

        Ctx.fillStyle = color; 

        Ctx.beginPath(); 

        Ctx.moveTo(x, y); 

        Ctx.bezierCurveTo(x – size, y – size, x – size * 2, y + size / 2, x, y + size); 

        Ctx.bezierCurveTo(x + size * 2, y + size / 2, x + size, y – size, x, y); 

        Ctx.fill(); 

    } 

 

    Function animateFireworks() { 

        Ctx.clearRect(0, 0, canvas.width, canvas.height); 

        Particles.forEach((p, i) => { 

            p.x += p.speedX; 

            p.y += p.speedY; 

            p.life--; 

            drawHeart(p.x, p.y, p.size, p.color); 

            if (p.life <= 0) particles.splice(I, 1); 

        }); 

 

        If (particles.length > 0) { 

            requestAnimationFrame(animateFireworks); 

        } 

    } 

 

    createHeartParticles(window.innerWidth / 2, window.innerHeight / 2); 

    animateFireworks(); 

} 