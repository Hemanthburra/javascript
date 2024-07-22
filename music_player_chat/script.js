// document.addEventListener('DOMContentLoaded', function () {
//     const audio = document.getElementById('audio');
//     const playPauseButton = document.getElementById('playPause');
//     const stopButton = document.getElementById('stop');
//     const progress = document.getElementById('progress');

//     // Check if the audio element is loaded
//     audio.addEventListener('loadedmetadata', function () {
//         console.log('Audio loaded successfully:', audio.src);
//     });

//     // Handle play/pause button click
//     playPauseButton.addEventListener('click', function () {
//         if (audio.paused) {
//             audio.play().then(() => {
//                 console.log('Audio playing');
//                 playPauseButton.textContent = 'Pause';
//             }).catch(error => {
//                 console.error('Error playing audio:', error);
//             });
//         } else {
//             audio.pause();
//             playPauseButton.textContent = 'Play';
//             console.log('Audio paused');
//         }
//     });

//     // Handle stop button click
//     stopButton.addEventListener('click', function () {
//         audio.pause();
//         audio.currentTime = 0;
//         playPauseButton.textContent = 'Play';
//         console.log('Audio stopped');
//     });

//     // Update progress bar as audio plays
//     audio.addEventListener('timeupdate', function () {
//         const progressPercent = (audio.currentTime / audio.duration) * 100;
//         progress.value = progressPercent;
//     });

//     // Seek audio when progress bar is changed
//     progress.addEventListener('input', function () {
//         const seekTime = (progress.value / 100) * audio.duration;
//         audio.currentTime = seekTime;
//     });

//     // Log errors
//     audio.addEventListener('error', function (event) {
//         console.error('Audio error:', event);
//     });
// });

const audio =  document.getElementById('audio');
const play_pause = document.getElementById('playPause');
const progress = document.getElementById('progress');
const stopButton = document.getElementById('stop');

play_pause.addEventListener('click',function(){
    if (audio.paused){
        audio.play();
        play_pause.textContent = 'Pause';
    }
    else{
        audio.pause();
        play_pause.textContent = 'Play';
    }
});

stopButton.addEventListener('click',function(){
    audio.pause();
    audio.currentTime = 0;
    play_pause.textContent = 'Play';
});

audio.addEventListener('timeupdate',function(){
    const x = (audio.currentTime / audio.duration) *100;
    progress.value = x;
});


