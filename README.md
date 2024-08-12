# Bot Management Application

## Deploy Link
[View the Application](https://bot-battlr-opal.vercel.app/)

## Overview

This React app allows users to manage bots, view their details, enlist them, and manage an army. It features search, sorting, and view switching capabilities.

## Features

- Fetch and display bots from an API.
- Search and sort bots.
- View detailed bot information.
- Manage enlisted bots.
- Toggle between bot list and enlisted army views.

## Components

- **`App`**: Manages state and renders views.
- **`FetchData`**: Fetches and displays bots; handles view toggling.
- **`BotArmy`**: Displays and manages enlisted bots.
- **`SearchBar`**: Filters bots by search query.
- **`SortBar`**: Sorts bots by criteria.
- **`BotSpecs`**: Shows detailed bot information.
- **`ViewSwitcher`**: Switches between bot list and army views.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bot-management-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd bot-management-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

- **View Bots**: Click "Show Bots" to view and interact with the bot list.
- **Enlist Bots**: Add bots to your army with "Enlist."
- **View Army**: Click "Show Army" to manage enlisted bots.
- **Switch Views**: Use the view switcher to toggle between views.

## License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.
