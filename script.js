// Referencias a elementos
const playBtn = document.getElementById('playBtn');
const loveBtn = document.getElementById('loveBtn');
const emojiContainer = document.getElementById('emojiContainer');

// Verificar si debe mostrar el video automáticamente
window.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('showVideo') === 'true') {
        sessionStorage.removeItem('showVideo');
        setTimeout(() => {
            showFullscreenVideo();
        }, 300);
    }
});

// Array de emojis de corazones variados
const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟', '♥️', '❣️', '💙', '💚', '💛', '💜', '🧡', '🖤', '🤍', '🤎'];

// Botón Play - Muestra video en pantalla completa
playBtn.addEventListener('click', function() {
    // Efecto al hacer clic
    playBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        playBtn.style.transform = 'scale(1)';
    }, 100);
    
    // Mostrar video en pantalla completa
    setTimeout(() => {
        showFullscreenVideo();
    }, 300);
});

// Función para mostrar video en pantalla completa
function showFullscreenVideo() {
    // Crear overlay de pantalla completa
    const videoOverlay = document.createElement('div');
    videoOverlay.id = 'videoOverlay';
    videoOverlay.className = 'video-overlay';
    
    // Crear elemento de video
    const video = document.createElement('video');
    video.id = 'fullscreenVideo';
    video.className = 'fullscreen-video';
    video.src = 'Assets/1.mp4';
    video.autoplay = true;
    video.controls = false;
    
    // Crear botón "Retroceder"
    const backBtn = document.createElement('button');
    backBtn.id = 'backBtn';
    backBtn.className = 'back-btn';
    backBtn.innerHTML = 'Retroceder';
    
    // Agregar evento al botón Retroceder
    backBtn.addEventListener('click', function() {
        video.pause();
        videoOverlay.remove();
    });
    
    // Crear botón "Seguir"
    const continueBtn = document.createElement('button');
    continueBtn.id = 'continueBtn';
    continueBtn.className = 'continue-btn';
    continueBtn.innerHTML = 'Seguir';
    
    // Agregar evento al botón Seguir
    continueBtn.addEventListener('click', function() {
        video.pause();
        videoOverlay.remove();
        window.location.href = 'page2.html';
    });
    
    // Agregar elementos al overlay
    videoOverlay.appendChild(video);
    videoOverlay.appendChild(backBtn);
    videoOverlay.appendChild(continueBtn);
    
    // Agregar overlay al body
    document.body.appendChild(videoOverlay);
}

// Botón Love - Hace caer muchos emojis de corazones
loveBtn.addEventListener('click', function() {
    // Efecto al hacer clic
    loveBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        loveBtn.style.transform = 'scale(1)';
    }, 100);
    
    // Crear muchos emojis cayendo
    createFallingHearts();
});

// Función para crear corazones cayendo
function createFallingHearts() {
    const numberOfHearts = 50; // Cantidad de corazones
    
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'falling-emoji';
            
            // Emoji aleatorio
            emoji.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            
            // Posición horizontal aleatoria
            emoji.style.left = Math.random() * 100 + '%';
            
            // Duración aleatoria de la animación
            const duration = 3 + Math.random() * 3; // Entre 3 y 6 segundos
            emoji.style.animationDuration = duration + 's';
            
            // Tamaño aleatorio
            const size = 30 + Math.random() * 30; // Entre 30px y 60px
            emoji.style.fontSize = size + 'px';
            
            // Agregar al contenedor
            emojiContainer.appendChild(emoji);
            
            // Eliminar el emoji después de que termine la animación
            setTimeout(() => {
                emoji.remove();
            }, duration * 1000);
        }, i * 100); // Retardo escalonado para efecto cascada
    }
}

// Opcional: Efecto hover en la foto
const photoCircle = document.querySelector('.photo-circle');
if (photoCircle) {
    photoCircle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    photoCircle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Agregar efecto de sonido al corazón (opcional - necesitarías un archivo de audio)
// Descomenta si agregas un archivo de sonido
/*
loveBtn.addEventListener('click', function() {
    const audio = new Audio('heart-sound.mp3');
    audio.play();
});
*/
