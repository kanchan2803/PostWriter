# PostWriter

PostWriter is a modern blog writing application built with React.js, leveraging the power of Tailwind CSS for styling and Appwrite for backend services. This project demonstrates the use of various cutting-edge web development technologies and concepts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts
- Rich text editing for blog content
- Responsive design for various screen sizes
- Real-time updates using Appwrite's real-time subscriptions

## Technologies Used

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Appwrite](https://appwrite.io/) - Open-source backend server
- [React Router DOM](https://reactrouter.com/) - Declarative routing for React applications
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Appwrite instance (local or cloud)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/kanchan2803/PostWriter.git
   ```

2. Navigate to the project directory:
   ```
   cd PostWriter
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   VITE_APPWRITE_BUCKET_ID=your_appwrite_bucket_id
   ```

5. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:5173` (or the port specified by Vite). You can now use the PostWriter application to create, edit, and manage your blog posts.

## Project Structure

- `src/`: Contains the source code of the application
  - `components/`: Reusable React components
  - `pages/`: Individual page components
  - `store/`: Redux store configuration and slices
  - `appwrite/`: Appwrite configuration and API calls
  - `hooks/`: Custom React hooks
  - `utils/`: Utility functions

## Key Concepts

- **Component-Based Architecture**: The application is built using reusable React components for better maintainability and scalability.
- **State Management**: Redux Toolkit is used for efficient state management across the application.
- **Form Handling**: React Hook Form is utilized for performant and flexible form implementations.
- **Routing**: React Router DOM is employed for declarative routing within the application.
- **Styling**: Tailwind CSS is used for rapid UI development with utility-first classes.
- **Animations**: Framer Motion is integrated for smooth and performant animations.
- **Backend Integration**: Appwrite services are used for authentication, database, and file storage functionalities.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
