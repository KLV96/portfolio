# Animated Train Portfolio

A developer portfolio featuring an interactive train animation that travels through your professional timeline.

## Project Structure

- `index.html`: Main entry point.
- `src/style.css`: Styles for the train, environment, and UI.
- `src/main.js`: Core application logic.
- `src/animation.js`: GSAP animation controller.
- `src/data.js`: Project data organized by year.

## How to Run

Since this project uses ES Modules (`import`/`export`), you cannot simply double-click `index.html` to open it (browsers block this for security). You need a local web server.

### Option 1: VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` and select "Open with Live Server".

### Option 2: Python
If you have Python installed:
```bash
# Run this in the project directory
python3 -m http.server
# Then open http://localhost:8000
```

### Option 3: Node.js (http-server)
If you have Node.js installed (even if `npm` command was missing earlier):
```bash
npx http-server .
```

## Customization

1. **Projects**: Edit `src/data.js` to add your own projects and years.
2. **Styles**: Modify `src/style.css` to change colors or train appearance.
