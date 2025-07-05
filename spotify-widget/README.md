# Spotify Now Playing Widget

A beautiful, responsive Spotify player widget that shows your currently playing track with playback controls.

## Features

- 🎵 Shows currently playing track
- 🎨 Beautiful UI with album art
- ⏯️ Play/Pause, Next, Previous controls
- 🎧 Real-time progress bar
- 📱 Fully responsive design
- 🔄 Auto-updates when track changes

## How to Use

1. Host these files on a web server
2. Replace the `SPOTIFY_USER_ID` in `script.js` with your Spotify User ID
3. Ensure your Spotify account has the Web Playback SDK enabled
4. Embed the widget using an iframe:

```html
<iframe 
  src="https://your-domain.com/spotify-widget/" 
  width="300" 
  height="380" 
  frameborder="0" 
  allowtransparency="true" 
  allow="encrypted-media">
</iframe>
```

## Requirements

- A Spotify Premium account
- Web hosting with HTTPS (required for Web Playback SDK)

## Customization

You can customize the appearance by modifying the `styles.css` file. The color scheme uses CSS variables for easy theming.

## Note

This widget requires a Spotify Premium account to work with the Web Playback SDK. Free accounts will not be able to control playback but can still display the currently playing track.
