# 🎵 BeatSync Music Player  
A modern **offline-friendly music player**, optimized for **Chromebooks**, supporting **lossless audio formats**, **album browsing**, **trackpad gestures**, and **Chromebook function keys**.

## 🔥 Features  
- **Offline Support** – Runs without an internet connection  
- **Lossless Audio Formats** – FLAC, WAV, AIFF, ALAC, MP3  
- **Album Browsing** – Organized like Samsung Music & Apple Music  
- **Search & Filtering** – Find albums, artists, or genres quickly  
- **Playlists System** – Create and save playlists locally  
- **Shuffle & Repeat** – Dynamic playback controls  
- **Wave Visualization** – Animated playback wave effects  
- **Equalizer Controls** – Adjustable bass, treble, and reverb  
- **Mini Player Mode** – Floating UI for quick controls  
- **Chromebook Function Key Support** – Play/Pause (`F5`), Skip (`F6/F7`), Volume (`F10/F11/F12`), Fullscreen (`F4`)  
- **Trackpad Gestures** – Swipe left/right to navigate songs  
- **Dark Mode UI** – Elegant contrast for immersive listening  

---

## 📁 Folder Structure  
Organized for **easy installation** and **Chromebook compatibility**.

BeatSync/
│── index.html         ← Main UI (HTML)
│── style.css         ← Styling (CSS)
│── script.js         ← Functionality (JavaScript)
│── convert.py        ← Audio conversion (Python)
│── batch_convert.sh  ← Automated conversions (Shell)
│── assets/           ← UI Elements & Album Art
│   ├── default-cover.jpg ← Placeholder artwork
│   ├── icons/        ← Custom UI icons
│── music/            ← Music Library
│   ├── Album1/
│   │   ├── Song1.flac ← Lossless audio (FLAC)
│   │   ├── Song2.wav  ← High-quality format (WAV)
│   │   ├── cover.jpg  ← Album artwork (JPG)
│   ├── Album2/
│   │   ├── Song3.aiff ← Uncompressed audio (AIFF)
│   │   ├── Song4.mp3  ← Compressed format (MP3)
│   │   ├── cover.png  ← Album artwork (PNG)
│── README.md         ← Documentation (Markdown)
│── config.json       ← Settings for customization
│── offline-data/     ← Local storage for playlists
│   ├── playlists.json ← Saved playlists (JSON)
│   ├── favorites.json ← Favorite albums (JSON)

---

## 🚀 Setup Instructions  
### 1️⃣ **Run Locally in Google Chrome**  
1. **Download the ZIP file** of this repository.  
2. **Extract the folder** (`BeatSync/`).  
3. **Open `index.html` in Google Chrome**.  
4. Enjoy **BeatSync** with full Chromebook support! 🎵  

### 2️⃣ **Convert Music Files (Optional)**
If you need to convert **FLAC, WAV, AIFF**, or **ALAC**:
- **Python Script**:
```sh
python convert.py
