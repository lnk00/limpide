# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Turborepo monorepo using Vite and TypeScript. The project uses Bun as the package manager.

### Architecture Overview

- **Monorepo Structure**: Uses Turborepo with workspaces for `apps/*` and `packages/*`
- **Package Manager**: Bun (specified in package.json)
- **Build System**: Turborepo orchestrates builds across packages
- **Shared Packages**: Common UI components, ESLint configs, and TypeScript configs are shared across apps

### Key Packages

- `@repo/ui`: Shared component and utility library with exports for counter, header, and setup-counter
- `@repo/eslint-config`: Shared ESLint configuration using TypeScript ESLint and Prettier
- `@repo/typescript-config`: Shared TypeScript configurations (base.json, vite.json)

## Development Commands

### Core Commands
- `bun run dev` - Start development servers for all apps
- `bun run build` - Build all packages and apps (respects dependency order)
- `bun run lint` - Lint all packages and apps
- `bun run format` - Format code with Prettier

### Turborepo Configuration
- Builds have dependency ordering (`"dependsOn": ["^build"]`)
- Dev mode runs with no cache and is persistent
- Build outputs go to `dist/**` directories

## Component Architecture

The UI package uses a simple functional component pattern:
- Components export functions that return HTML strings
- Utilities are separated from components
- Package exports are explicitly defined in package.json for better tree-shaking

## Linting and Formatting

- ESLint with TypeScript support and Prettier integration
- Individual packages can run `bun run lint` for targeted linting
- Prettier formats TypeScript, TSX, and Markdown files