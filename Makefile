.PHONY: help web clean install install-server install-client build server

# Default target - show help
help:
	@echo ""
	@echo "Kenotic.ai - Available Make Targets"
	@echo "===================================="
	@echo ""
	@echo "  make help           - Show this help message (default)"
	@echo "  make install        - Install all dependencies (server + client)"
	@echo "  make install-server - Install server dependencies only"
	@echo "  make install-client - Install client dependencies only"
	@echo "  make web            - Start the React development server"
	@echo "  make server         - Start the Express backend server"
	@echo "  make build          - Build the React app for production"
	@echo "  make clean          - Remove all build artifacts and dependencies"
	@echo ""

# Install all dependencies
install: install-server install-client
	@echo "✓ All dependencies installed"

# Install server dependencies
install-server:
	@echo "Installing server dependencies..."
	@npm install

# Install client dependencies
install-client:
	@echo "Installing client dependencies..."
	@cd client && npm install

# Start the React development server (port 3000)
web:
	@echo "Starting React development server on http://localhost:3000"
	@echo "Make sure the backend server is running with 'make server' in another terminal"
	@cd client && npm start

# Start the Express backend server (port 3001)
server:
	@echo "Starting Express backend server on http://localhost:3001"
	@npm start

# Build the React app for production
build:
	@echo "Building React app for production..."
	@cd client && npm run build
	@echo "✓ Production build complete in client/build/"

# Clean all artifacts and dependencies
clean:
	@echo "Cleaning build artifacts and dependencies..."
	@rm -rf node_modules
	@rm -rf client/node_modules
	@rm -rf client/build
	@rm -rf package-lock.json
	@rm -rf client/package-lock.json
	@echo "✓ Clean complete"
