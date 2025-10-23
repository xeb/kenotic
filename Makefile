.PHONY: help dev install build clean

# Default target - show help
help:
	@echo ""
	@echo "Kenotic.ai - Available Make Targets"
	@echo "===================================="
	@echo ""
	@echo "  make help    - Show this help message (default)"
	@echo "  make install - Install dependencies"
	@echo "  make dev     - Start the development server (port 3000)"
	@echo "  make build   - Build the app for production"
	@echo "  make clean   - Remove all build artifacts and dependencies"
	@echo ""

# Install dependencies
install:
	@echo "Installing dependencies..."
	@cd client && npm install
	@echo "✓ Dependencies installed"

# Start the React development server (port 3000)
dev:
	@echo "Starting development server on http://localhost:3000"
	@cd client && npm start

# Build the React app for production
build:
	@echo "Building app for production..."
	@cd client && npm run build
	@echo "✓ Production build complete in client/build/"

# Clean all artifacts and dependencies
clean:
	@echo "Cleaning build artifacts and dependencies..."
	@rm -rf client/node_modules
	@rm -rf client/build
	@rm -rf client/package-lock.json
	@echo "✓ Clean complete"
