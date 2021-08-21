const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// Check if playing
let isPlaying = false

// Play
const playSong = () => {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'pause')
    music.play()
}

// Pause
const pauseSong = () => {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'play')
    music.pause()
}

// Play or Pause - Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))