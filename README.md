# Calculator

A simple, elegant calculator application built with Electron.

![Calculator](https://img.shields.io/badge/Electron-App-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

## Features

- Basic arithmetic operations (+, -, ×, ÷)
- Clean, modern UI with smooth animations
- Responsive button interactions
- Native desktop application
- Cross-platform (Windows, macOS, Linux)

## Tech Stack

- **Electron** - Desktop application framework
- **Vanilla JavaScript** - No frameworks, pure JS
- **CSS Grid & Flexbox** - Modern layout
- **CSS Custom Properties** - Theme variables

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the app in development mode:

```bash
npm start
```

## Building

Create an executable:

```bash
npm run build
```

The built application will be in the `dist` folder.

## Project Structure

```
Project2calc/
├── main.js          # Electron main process
├── index.html       # Calculator UI
├── style.css        # Styling with CSS variables
├── script.js        # Calculator logic
├── package.json     # Dependencies and build config
└── fox.ico          # Application icon
```

## How It Works

The calculator uses a simple state machine with three variables:
- `currentValue` - The number currently displayed
- `previousValue` - The first operand in a calculation
- `operation` - The selected operator (+, -, ×, ÷)

A flag `shouldResetOnNextInput` handles the UX after pressing equals, allowing fresh input while preserving the ability to chain operations.

## License

ISC
