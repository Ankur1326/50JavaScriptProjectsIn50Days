const sounds = ['applause', 'boo', "gasp", 'tada', 'victory', 'wrong'] //Array for sound names

sounds.forEach(sound => {
    const btn = document.createElement('button') // Create button element
    btn.classList.add('btn') // add button class for styling

    btn.innerText = sound 

    btn.addEventListener('click', () => {
        stopSongs() //When a button is clicked, stop any currently playing sounds

        document.getElementById(sound).play() // play sound
        console.log(document.getElementById(sound));
    })

    document.getElementById('buttons').appendChild(btn)
})

// Stop all currently playing sounds
function stopSongs() {
    // Iterate through each sound
    sounds.forEach(sound => {
        const song = document.getElementById(sound) // Get the audio element for the sound

        song.pause()  // Pause the sound
        song.currentTime = 0 // Reset playback time to the beginning
    })
}