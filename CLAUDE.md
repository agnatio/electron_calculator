# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Electron-based calculator application (Project2calc) located in the Prototypes directory.

## Current State

The project is currently being initialized. No package.json, source files, or build configuration exists yet.

## Expected Architecture

Once initialized, this will likely follow a standard Electron application structure:
- **Main process**: Node.js process managing application lifecycle and native OS interactions
- **Renderer process**: Chromium-based UI rendering the calculator interface
- **IPC communication**: Bridge between main and renderer processes for secure communication

## Development Setup

When package.json is created, typical commands will include:
- Install dependencies: `npm install`
- Start development: `npm start` or `npm run dev`
- Build application: `npm run build`
- Package for distribution: `npm run package` or `npm run make`
