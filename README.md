# React Native Learning App

A comprehensive learning application built with React Native and Expo Router.

## Project Structure

This project uses the Expo Router file-based routing system. Here's an overview of the folder structure:

```
app/
├── _layout.tsx              # Root layout for the entire app
├── index.tsx                # Root index redirects to learn tab
├── +not-found.tsx           # 404 error page
├── core-components.tsx      # Core Components screen
├── layout-styling.tsx       # Layout & Styling screen
├── user-input.tsx           # User Input screen
├── navigation.tsx           # Navigation screen
├── (tabs)/                  # Tab-based navigation
│   ├── _layout.tsx          # Layout for the tab navigation
│   └── learn.tsx            # Main learning screen with links to all topics
└── modals/                  # Modal screens
    └── settings.tsx         # Settings modal
```

## Features

- **Central Learning Hub**: A single tab to access all learning resources
- **Core React Native Components**: Examples of basic building blocks
- **Layout & Styling**: Techniques for creating beautiful UIs
- **User Input Handling**: Forms and user interaction examples
- **Navigation Patterns**: Different navigation flows and patterns
- **Modal Screens**: Overlay content examples

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open the app in the Expo Go app on your phone or in a simulator.

## Navigation Structure

The app has been structured with a focus on clarity and ease of navigation:

1. **Single Tab**: The app has a single "Learn" tab that serves as the central hub
2. **Content Pages**: Each topic (Components, Styling, etc.) has its own dedicated page
3. **Back Navigation**: All content pages include an intuitive back navigation to return to the Learn screen
4. **Modal**: Settings are accessed through a modal overlay

## Technology Stack

- React Native
- Expo
- Expo Router (File-based routing)
- TypeScript

## Contributing

Feel free to submit issues or pull requests to improve the examples or add new learning modules.

## License

MIT
