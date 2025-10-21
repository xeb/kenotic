# Development Guide

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- make (optional, but recommended)

### Quick Start with Make

The easiest way to get started is using the provided Makefile:

```bash
# See all available commands
make

# Install all dependencies (server + client)
make install

# Start the React development server
make web
```

### Installation (Manual)

If you prefer not to use make, install dependencies manually:

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### Running the Development Server

#### Using Make (Recommended)

```bash
# Terminal 1 - Start backend server (port 3001)
make server

# Terminal 2 - Start frontend React app (port 3000)
make web
```

#### Manual Commands

##### Backend Server (Port 3001)

Start the Express backend server:

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

The server will run on `http://localhost:3001`

API endpoints:
- `GET /api/sermons` - List all sermons
- `GET /api/sermons/:id` - Get a specific sermon

##### Frontend React App (Port 3000)

In a separate terminal, start the React development server:

```bash
cd client
npm start
```

The React app will run on `http://localhost:3000` and proxy API requests to port 3001.

### Available Make Commands

Run `make` or `make help` to see all available commands:

- `make install` - Install all dependencies (server + client)
- `make web` - Start the React development server
- `make server` - Start the Express backend server
- `make build` - Build the React app for production
- `make clean` - Remove all build artifacts and dependencies

### Project Structure

```
kenotic/
├── server/
│   ├── index.js          # Express server
│   └── data/
│       └── sermons.js    # Sermon data
├── client/               # React application
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── SermonList.js
│       │   └── SermonDetail.js
│       ├── App.js
│       └── App.css
├── sources/              # Source materials for sermons
└── package.json
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

```bash
# Build the React app
cd client
npm run build

# The built files will be in client/build/
```

To serve in production mode, set the NODE_ENV:

```bash
NODE_ENV=production npm start
```

The server will serve the built React app from `client/build/`.
