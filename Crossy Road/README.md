# Crossy Road 3D Game

A 3D implementation of the classic Crossy Road game built with Three.js.

![Game Screenshot](screenshot.png)

## Table of Contents
- [Features](#features)
- [How to Play](#how-to-play)
- [Controls](#controls)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Game Mechanics](#game-mechanics)
- [Development](#development)
- [License](#license)

## Features

- 🐔 3D chicken character with smooth animations
- 🚗 Various vehicles to avoid
- 🌳 Interactive environment with roads and grass
- 📊 Score tracking
- 📱 Mobile-friendly controls
- 🎮 Simple and intuitive gameplay

## How to Play

Guide your chicken safely across the busy roads and rivers. The goal is to get as far as possible while avoiding obstacles and collecting points.

## Controls

### Desktop:
- **Arrow Keys** or **WASD** to move the chicken
- **Space** to jump

### Mobile:
- On-screen directional buttons for movement
- Tap to jump

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crossy-road-3d.git
   cd crossy-road-3d
   ```

2. Open `index.html` in your web browser

Or simply open the `index.html` file directly in your browser.

## Technologies Used

- [Three.js](https://threejs.org/) - 3D library for JavaScript
- HTML5 & CSS3
- JavaScript (ES6+)
- WebGL for hardware-accelerated 3D graphics

## Game Mechanics

### Lanes
- **Grass Lanes**: Safe zones where you can move freely
- **Road Lanes**: Watch out for moving vehicles
- **River Lanes**: Cross carefully using logs or platforms

### Scoring
- +10 points for each lane crossed
- Bonus points for collecting items (coming soon!)

### Lives
You start with 3 lives. Running into obstacles will cost you a life. Game ends when all lives are lost.

## Development

### Project Structure
- `index.html` - Main HTML file
- `style.css` - Styling for the game UI
- `script.js` - Main game logic and 3D rendering

### Running Locally
1. Start a local server:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser

### Future Improvements
- Add sound effects and background music
- Implement different characters
- Add power-ups and collectibles
- Create different environments
- Add day/night cycle

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name] | [GitHub Profile](https://github.com/yourusername)
