function playAudio() {
        var audio = document.getElementById('audioPlayer');
        
        // Проверяем, находится ли аудио в режиме паузы. Если да, воспроизводим. Если нет, ставим на паузу.
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };