// Spotify Web Playback SDK Integration
const SPOTIFY_CLIENT_ID = '5c098bcc800f45d68e44964ff870edc6';
const SPOTIFY_USER_ID = '31nlfahqmitvn473lhsjenbthtve';

// DOM Elements
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackName = document.getElementById('trackName');
const artistName = document.getElementById('artistName');
const albumImage = document.getElementById('albumImage');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const progressContainer = document.querySelector('.progress-container');

// Player state
let player;
let isPlaying = false;
let currentTrack = {};
let progressInterval;

// Format time (seconds to MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Update progress bar
function updateProgressBar() {
    if (!player || !player.getCurrentState()) return;
    
    player.getCurrentState().then(state => {
        if (!state) return;
        
        const { position, duration } = state;
        const progressPercent = (position / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        currentTimeEl.textContent = formatTime(position / 1000);
        durationEl.textContent = formatTime(duration / 1000);
    });
}

// Update track info
function updateTrackInfo(track) {
    trackName.textContent = track.name || 'Not Playing';
    artistName.textContent = track.artists?.map(artist => artist.name).join(', ') || 'Spotify';
    albumImage.src = track.album?.images[0]?.url || 'https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69';
    albumImage.alt = track.album?.name || 'Album Art';
    document.title = `${track.name || 'Not Playing'} • ${track.artists?.[0]?.name || 'Spotify'}`;
}

// Toggle play/pause
function togglePlay() {
    if (!player) return;
    
    player.togglePlay().then(() => {
        isPlaying = !isPlaying;
        updatePlayButton();
    });
}

// Update play/pause button
function updatePlayButton() {
    const icon = playPauseBtn.querySelector('i');
    if (isPlaying) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        document.body.classList.add('playing');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        document.body.classList.remove('playing');
    }
}

// Next track
function nextTrack() {
    if (!player) return;
    player.nextTrack();
}

// Previous track
function prevTrack() {
    if (!player) return;
    player.previousTrack();
}

// Seek to position in track
function setProgress(e) {
    if (!player) return;
    
    const width = this.clientWidth;
    const clickX = e.offsetX;
    
    player.getCurrentState().then(state => {
        if (!state) return;
        const seekTime = (clickX / width) * state.duration;
        player.seek(seekTime);
    });
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
progressContainer.addEventListener('click', setProgress);

// Initialize Spotify Web Playback SDK
window.onSpotifyWebPlaybackSDKReady = () => {
    player = new Spotify.Player({
        name: 'GitHub Profile Player',
        getOAuthToken: cb => {
            // Note: In a production app, implement proper OAuth flow
            fetch('https://spotify-oauth-proxy.vercel.app/api/token')
                .then(res => res.json())
                .then(data => cb(data.access_token))
                .catch(err => console.error('Error getting token:', err));
        },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        // Transfer playback to this device
        fetch(`https://api.spotify.com/v1/me/player`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + document.querySelector('meta[name="spotify-token"]')?.content || ''
            },
            body: JSON.stringify({
                device_ids: [device_id],
                play: true
            })
        }).catch(err => console.error('Error transferring playback:', err));
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Player state changed
    player.addListener('player_state_changed', (state) => {
        if (!state) return;
        
        const { current_track, position, duration, paused } = state;
        
        // Update track info if it's a new track
        if (!currentTrack.id || currentTrack.id !== current_track.id) {
            currentTrack = {
                id: current_track.id,
                name: current_track.name,
                artists: current_track.artists,
                album: current_track.album
            };
            updateTrackInfo(currentTrack);
        }
        
        // Update play/pause state
        if (isPlaying === paused) {
            isPlaying = !paused;
            updatePlayButton();
        }
        
        // Update progress bar
        const progressPercent = (position / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(position / 1000);
        durationEl.textContent = formatTime(duration / 1000);
    });

    // Connect to the player
    player.connect().then(success => {
        if (success) {
            console.log('Connected to Spotify player!');
            
            // Start progress bar updates
            clearInterval(progressInterval);
            progressInterval = setInterval(updateProgressBar, 1000);
        }
    });
};

// Load the Spotify Web Playback SDK
const script = document.createElement('script');
script.src = 'https://sdk.scdn.co/spotify-player.js';
document.body.appendChild(script);
