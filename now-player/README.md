<div align="center">
  <h1>🎵 Now Player</h1>
  <p>A beautiful, responsive music player for the web</p>
  
  [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Nareshrana1999/NareshRana/tree/main/now-player)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/Nareshrana1999/NareshRana?style=social)](https://github.com/Nareshrana1999/NareshRana/stargazers)
  
  [![Try Now](https://img.shields.io/badge/🎧-Try%20Now-1DB954?style=for-the-badge&logo=spotify&logoColor=white&labelColor=1DB954&color=191414)](https://htmlpreview.github.io/?https://github.com/Nareshrana1999/NareshRana/blob/main/now-player/index.html)
</div>

## ✨ Features

🎯 **Intuitive Controls** - Play, pause, skip, and go back to previous songs with ease  
🎨 **Modern UI** - Clean, responsive design that works on all devices  
⏱️ **Progress Tracking** - Visual progress bar with current time and duration  
🔊 **High Quality** - Crystal clear audio playback  
🌓 **Dark/Light Mode** - Automatically adapts to your system preferences

## 🎧 Player Preview

<div align="center">
  <img src="https://img.shields.io/badge/🔊_Now_Playing-Random_Song-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Now Playing">
  
  <div style="background: #ffffff; border-radius: 12px; padding: 20px; max-width: 500px; margin: 20px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #e0e0e0;">
    <!-- Song Info -->
    <div style="display: flex; align-items: center; gap: 20px; width: 100%;">
      <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #1DB954 0%, #1ed760 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 8px rgba(29, 185, 84, 0.2);">
        <span style="color: white; font-size: 32px;">🎵</span>
      </div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 700; color: #000000; font-size: 1.2rem; margin: 0 0 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Random Song Title</div>
        <div style="font-size: 0.95rem; color: #535353; margin: 0 0 8px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">Various Artists</div>
        <div style="height: 4px; background: #e0e0e0; border-radius: 2px; overflow: hidden; width: 100%; margin: 8px 0;">
          <div style="width: 45%; height: 100%; background: linear-gradient(90deg, #7209b7, #3a0ca3); border-radius: 2px;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 4px;">
          <span style="font-size: 11px; color: #888;">1:23</span>
          <span style="font-size: 11px; color: #888;">3:45</span>
        </div>
      </div>
    </div>
    
    <!-- Controls -->
    <div style="display: flex; justify-content: center; gap: 25px; margin: 20px 0 10px 0;">
      <button style="background: none; border: none; color: #4cc9f0; cursor: pointer; font-size: 20px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Previous">
        ⏮️
      </button>
      <button style="background: #1DB954; border: none; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; box-shadow: 0 4px 8px rgba(29, 185, 84, 0.2); transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 6px 12px rgba(29, 185, 84, 0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 8px rgba(29, 185, 84, 0.2)'" title="Play">
        ▶️
      </button>
      <button style="background: none; border: none; color: #4cc9f0; cursor: pointer; font-size: 20px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Next">
        ⏭️
      </button>
    </div>
  </div>
  
  <p><em>This is a visual preview. <a href="https://htmlpreview.github.io/?https://github.com/Nareshrana1999/NareshRana/blob/main/now-player/index.html">Click here</a> to try the actual player!</em></p>
</div>

## 🚀 Quick Start

### Option 1: Try Online
Simply click the button below to try Now Player directly in your browser:

[![Try Now](https://img.shields.io/badge/🎧-Try_Now-1DB954?style=for-the-badge&logo=spotify&logoColor=white&labelColor=1DB954&color=191414)](https://htmlpreview.github.io/?https://github.com/Nareshrana1999/NareshRana/blob/main/now-player/index.html)

### Option 2: Run Locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/Nareshrana1999/NareshRana.git
   cd NareshRana/now-player
   ```

2. **Open in browser**
   Simply open `index.html` in your favorite web browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome
- **Deployment**: GitHub Pages

## 📱 Responsive Design

Now Player looks great on all devices, from mobile phones to desktop computers. The interface automatically adjusts to provide the best experience on any screen size.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to Now Player, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern music players
- Built with ❤️ by [Naresh Rana](https://github.com/Nareshrana1999)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Nareshrana1999">Naresh Rana</a>
  <br>
  <a href="https://github.com/Nareshrana1999/NareshRana">View on GitHub</a> | 
  <a href="https://github.com/Nareshrana1999/NareshRana/issues">Report an Issue</a> | 
  <a href="https://github.com/Nareshrana1999/NareshRana/pulls">Contribute</a>
</div>
