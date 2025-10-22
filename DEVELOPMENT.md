# Development Guide

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- make (optional, but recommended)

### Quick Start

The easiest way to get started:

```bash
# Install dependencies
make install

# Start the development server
make dev
```

That's it! The app will open at http://localhost:3000 with hot reloading enabled.

### Installation

#### Using Make (Recommended)

```bash
make install
```

#### Manual Installation

```bash
cd client
npm install
```

### Running the Development Server

#### Using Make (Recommended)

```bash
make dev
# or
make start
# or
make web
```

#### Manual Command

```bash
cd client
npm start
```

The development server runs on `http://localhost:3000` with hot reloading enabled. Any changes you make to the code will automatically refresh the browser.

### Available Make Commands

Run `make` or `make help` to see all available commands:

- `make install` - Install dependencies
- `make dev` - Start the development server (port 3000)
- `make start` - Alias for `make dev`
- `make web` - Alias for `make dev`
- `make build` - Build the app for production
- `make clean` - Remove all build artifacts and dependencies

### Project Structure

```
kenotic/
├── client/               # React application
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── SermonList.js
│       │   └── SermonDetail.js
│       ├── data/
│       │   └── sermons.js    # Sermon data
│       ├── App.js
│       └── App.css
├── sources/              # Source materials for sermons
└── Makefile
```

### Design Aesthetic

The site uses a "monastery meets terminal" aesthetic:

- **Font**: Libre Baskerville (serif, not monospace)
- **Color Palette**:
  - Background: #2a2520 (dark brown)
  - Content boxes: #3a3226 (medium brown)
  - Text: #d4c5b0 (tan/beige)
  - Accents: Various shades of grey, tan, and brown
- **Style**: Clean, hierarchical, text-focused with careful whitespace

### Sample Sermons

The project includes 4 sample sermons based on content from `sources/`:

1. **Kenosis: Creating Space for Love** - Based on kenotic notes
2. **Through the Wilderness: Obedience and Strength** - Based on 40 days of wilderness notes
3. **Reality, Not Rules: God as the Ground of Being** - Theological reflection
4. **The End of Empire: God's Bottom-Up Reign** - Kingdom theology

All sample sermons are tagged with "sample" for easy identification.

### Building for Production

#### Using Make

```bash
make build
```

#### Manual Build

```bash
cd client
npm run build
```

The built files will be in `client/build/` and can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).
