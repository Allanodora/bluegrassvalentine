function togglePlay(audioId, btn) {
    const audio = document.getElementById(audioId);
    
    // Load source if not already loaded (for optimized loading)
    if (!audio.getAttribute('src') && audio.dataset.src) {
        audio.src = audio.dataset.src;
        audio.load();
    }

    if (audio.paused) {
        // Pause all other audios first
        document.querySelectorAll('audio').forEach(a => {
            if (a.id !== audioId) {
                a.pause();
                const otherBtn = a.closest('.track').querySelector('.listen-btn');
                if (otherBtn) otherBtn.textContent = 'Listen';
            }
        });
        audio.play();
        btn.textContent = 'Pause';
    } else {
        audio.pause();
        btn.textContent = 'Listen';
    }
}

function toggleExpand(playerId, btn) {
    const player = document.getElementById(playerId);
    const isVisible = player.style.display === 'block';
    player.style.display = isVisible ? 'none' : 'block';
    btn.querySelector('span').textContent = isVisible ? '⤢' : '⤡';
}
