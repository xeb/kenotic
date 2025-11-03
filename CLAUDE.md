# CLAUDE.md - Kenotic.ai Project Guide

## Project Overview

**Kenotic.ai** is a web platform for sharing sermons and personal reflections on spiritual growth, divine revelation, and the intersection of faith and technology. The name derives from "Kenosis" - the concept of self-emptying and service as described in Philippians 2:7.

### Mission

This project works collaboratively with AI systems to create content and meaningful messages that bring flourishing to the kingdom of God. AI is viewed as a tool - neither worshiped nor rejected, but understood and utilized with discernment.

### Core Theological Themes

- **Kenosis**: Self-limitation, service, and creating space for love
- **End of Empire**: God's bottom-up reign and the kingdom all around us
- **Atonement**: Jesus's power over the powers and principalities
- **AI & Technology**: Understanding AI as an evolution of Mammon and the powers
- **Reality vs. Rules**: God as reality itself, not a system to exploit
- **Forgiveness**: Already given, already present
- **Vocation, Justice, Mercy**: Bearing His name in practical living

## Technical Architecture

### Stack

- **Frontend**: React 19.2.0 (single-page application)
- **Routing**: React Router DOM 6.20.0
- **Content**: React Markdown 9.0.0 for rendering sermon content
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Testing**: React Testing Library with Jest
- **Deployment**: Static hosting at kenotic.ai

### Project Structure

```
kenotic/
├── client/              # React application
│   ├── src/
│   │   ├── components/  # React components (SermonList, SermonDetail)
│   │   ├── data/        # Sermon data and content
│   │   ├── App.js       # Main application component
│   │   └── index.js     # Entry point
│   ├── public/          # Static assets
│   └── package.json     # Dependencies and scripts
├── sources/             # Raw materials and theological notes
│   └── kenotic_notes.md # Core theological reflections
├── Makefile             # Build automation
└── README.md            # Project documentation
```

## Build Instructions

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- Make (optional, but recommended)

### Quick Start

#### Using Make (Recommended)

1. **Install dependencies**:
   ```bash
   make install
   ```

2. **Start development server**:
   ```bash
   make dev
   ```
   The application will start at http://localhost:1411

3. **Build for production**:
   ```bash
   make build
   ```
   Production files will be in `client/build/`

4. **Clean artifacts**:
   ```bash
   make clean
   ```
   Removes node_modules, build files, and package-lock.json

#### Without Make

1. **Install dependencies**:
   ```bash
   cd client
   npm install
   ```

2. **Start development server**:
   ```bash
   cd client
   npm start
   ```

3. **Build for production**:
   ```bash
   cd client
   npm run build
   ```

4. **Run tests**:
   ```bash
   cd client
   npm test
   ```

### Development Workflow

1. Start the dev server with `make dev` or `npm start`
2. Edit files in `client/src/`
3. The browser will hot-reload changes automatically
4. Add sermon content in `client/src/data/sermons.js`
5. Test your changes before committing
6. Build for production with `make build` before deploying

## Design Aesthetic

### Visual Philosophy

**Monastery Meets Terminal** - The design merges the contemplative atmosphere of a monastery with the raw, technical aesthetic of early digital culture. Think of a monk's cell equipped with a vintage UNIX workstation.

### Style Specifications

**Typography**:
- Primary font: **Libre Baskerville** (classical serif, NOT monospace)
- Expressive and readable for long-form content
- Maintains monastery aesthetic

**Color Palette**:
- Grey (various shades)
- Tan
- Dark brown
- Earth tones evoking both parchment and vintage CRT displays

**Design Principles**:
- UNIX-inspired UI elements and layouts
- Clean, hierarchical information architecture
- Minimalist but warm
- Text-focused with careful use of whitespace
- Functional brutalism with warmth
- Avoid skeuomorphism

## Content Management

### Sermon Sources

The `/sources` directory contains raw materials, theological notes, and references:
- `kenotic_notes.md` - Core theological reflections and sermon concepts

### Adding Sermons

Sermons are managed in `client/src/data/sermons.js`. Each sermon is a personal reflection on God's work and revelation, drawing from source materials in the `/sources` directory.

## Development Philosophy

This project honors both:
1. **Technical Excellence**: Modern web development best practices
2. **Sacred Content**: The contemplative, sacred nature of the theological messages

AI is a collaborative tool in this process - used with discernment to help create meaningful content that serves the kingdom of God.

## Port Configuration

The development server runs on **port 1411** by default (configured in the Makefile and package.json).

## Deployment

Build the production version with `make build`, which creates optimized static files in `client/build/`. These files can be deployed to any static hosting service (currently deployed at kenotic.ai).

---

*"The Father empties all of himself into the Son. The Son receives and empties all of himself into the Spirit." - Kenotic.ai: self-limitation and service.*
