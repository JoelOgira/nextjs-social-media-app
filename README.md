# Next.js Social Media Application - Local Development with Docker

This document provides instructions for setting up and running the Next.js Social Media Application locally using Docker.

## Prerequisites

Before you begin, ensure you have the following installed:

1.  **Docker/Docker Engine:** Docker is required to containerize and run the application's dependencies.
2.  **Node.js and npm:** Node.js and npm (Node Package Manager) are needed to install and manage the application's dependencies.
3.  **Git:** Git is used for cloning the repository.

## Setup Instructions

Follow these steps to get the application running on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  **Install Node Modules:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    * Create a `.env` file in the root of your project directory.
    * Use the provided `.env.example` file as a template and fill in the required values.

    ```
    POSTGRES_USER="postgres"
    POSTGRES_PASSWORD="password"
    POSTGRES_HOST="postgres_db"
    POSTGRES_PORT="5432"
    POSTGRES_DB="postgres_db"

    # If using WSL and an environment variable is set, connect to the Docker engine in WSL.
    # Uncomment and modify this line if needed.
    # POSTGRES_HOST="172.28.13.42"

    DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@next_social_db:${POSTGRES_PORT}/${POSTGRES_DB}

    # When connecting to Supabase, add directUrl.
    DIRECT_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@next_social_db:${POSTGRES_PORT}/${POSTGRES_DB}
    ```

    **Note:**
    * Adjust the `POSTGRES_HOST` if you are using WSL and need to connect to the Docker engine running in WSL.
    * The `DATABASE_URL` and `DIRECT_URL` are used by Prisma to connect to the PostgreSQL database.
    * The .env.example file is used as a guidance for the correct variables that need to be set.

4.  **Launch the Application with Docker Compose:**

    ```bash
    docker compose up --build -d
    ```

    This command will:

    * Build the Docker images for the application and the PostgreSQL database.
    * Start the containers in detached mode (`-d`).
    * Run the Prisma migrations to create the necessary database tables.
    * Start the Next.js development server.

5.  **Access the Application:**

    * Open your web browser and navigate to `http://localhost:3000`.

## Deployment to Vercel

If you are deploying to Vercel, ensure that your `package.json` file includes the following script:

```json
"scripts": {
  "postinstall": "prisma generate"
}