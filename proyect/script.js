 // Crear estrellas mejoradas
        function createStars() {
            const body = document.body;
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                body.appendChild(star);
            }
        }

        // Crear estrellas fugaces
        function createShootingStars() {
            const container = document.getElementById('shooting-stars');
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('div');
                star.className = 'shooting-star';
                star.style.top = Math.random() * 40 + '%';
                star.style.left = Math.random() * 40 + 60 + '%';
                star.style.animationDelay = Math.random() * 8 + 's';
                container.appendChild(star);
            }
        }

        // Crear corazones flotantes con más variedad
        function createFloatingHearts() {
            const container = document.getElementById('floating-hearts');
            const colors = ['#ff6868', '#ff6868', '#000000', '#000000'];
            
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart-float';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 6 + 's';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(heart);
            }
        }

        // Crear efecto de partículas
        function createParticles() {
            const container = document.createElement('div');
            container.className = 'particles';
            document.body.appendChild(container);
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Posición aleatoria alrededor del sello
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                particle.style.setProperty('--x', x + 'px');
                particle.style.setProperty('--y', y + 'px');
                
                // Color aleatorio
                const colors = ['#ff6868', '#8200a', '#ff7eb3', '#ff65a3', '#000000'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                // Tamaño aleatorio
                particle.style.width = (Math.random() * 8 + 4) + 'px';
                particle.style.height = particle.style.width;
                
                // Velocidad aleatoria
                particle.style.animationDuration = (Math.random() * 1 + 1) + 's';
                
                container.appendChild(particle);
            }
            
            setTimeout(() => {
                container.remove();
            }, 2000);
        }

        // Abrir sobre
        document.getElementById('envelope-seal').addEventListener('click', function() {
            document.getElementById('envelope').classList.add('open');
            document.getElementById('back-btn').classList.add('show');
            createParticles();
            createConfetti();
            activateGlowEffect();
            
            // Reproducir sonido (opcional)
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.log('Audio no pudo reproducirse: ', e));
        });

        // Cerrar sobre
        document.getElementById('back-btn').addEventListener('click', function() {
            document.getElementById('envelope').classList.remove('open');
            document.getElementById('back-btn').classList.remove('show');
        });

        function setMessage(message) {
            document.getElementById('letter-message').innerHTML = message;
        }

        // Crear notas musicales flotantes
        function createMusicNotes() {
            const container = document.getElementById('background-effects');
            const notes = ['♪', '♫', '♬', '♩', '♭', '♮'];
            
            setInterval(() => {
                const note = document.createElement('div');
                note.className = 'music-note';
                note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
                note.style.left = Math.random() * 100 + '%';
                note.style.top = Math.random() * 100 + '%';
                note.style.opacity = '0';
                container.appendChild(note);
                
                setTimeout(() => {
                    note.remove();
                }, 4000);
            }, 2000);
        }

        // Crear confeti
        function createConfetti() {
            const container = document.getElementById('background-effects');
            const colors = ['#ff6868', '#ffb347', '#a6ff4d', '#4da6ff', '#d24dff', '#ff4d94'];
            
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.width = (Math.random() * 8 + 5) + 'px';
                    confetti.style.height = (Math.random() * 8 + 5) + 'px';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    confetti.style.animationDelay = (Math.random() * 2) + 's';
                    
                    // Formas variadas
                    const shape = Math.floor(Math.random() * 4);
                    if (shape === 0) {
                        confetti.style.borderRadius = '50%';
                    } else if (shape === 1) {
                        confetti.style.borderRadius = '0';
                    } else if (shape === 2) {
                        confetti.style.width = '8px';
                        confetti.style.height = '8px';
                        confetti.style.transform = 'rotate(45deg)';
                    }
                    
                    container.appendChild(confetti);
                    
                    setTimeout(() => {
                        confetti.remove();
                    }, 5000);
                }, Math.random() * 500);
            }
        }

        // Crear estrellas arcoiris
        function createRainbowStars() {
            const body = document.body;
            for (let i = 0; i < 20; i++) {
                const star = document.createElement('div');
                star.className = 'star rainbow-star';
                const size = Math.random() * 4 + 2;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                body.appendChild(star);
            }
        }

        // Efecto de brillo al abrir
        function activateGlowEffect() {
            const glowEffect = document.getElementById('glow-effect');
            glowEffect.classList.add('active');
            
            setTimeout(() => {
                glowEffect.classList.remove('active');
            }, 1500);
        }

        // Inicializar
        window.onload = function() {
            createStars();
            createRainbowStars();
            createShootingStars();
            createFloatingHearts();
            createMusicNotes();
            
            // Agregar efecto de pulsación al sello
            document.getElementById('envelope-seal').classList.add('pulse');
            
            const mensaje = ``;
            setMessage(mensaje);
        };