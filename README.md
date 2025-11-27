
<div align="center">
  <img src="frontend/public/sun-and-cloud.png" alt="logo" width="100px"/>
  <h1>Skylithic Weather</h1> 
  <p>
    A modern and responsive weather forecast application that provides real-time weather information for any city.
  </p>
</div>

---

## 🌟 About The Project

Skylithic Weather is a web application built with the React + Vite, Express JS and a Turborepo for monorepo management. It allows users to search for a city and get the current weather, as well as a forecast. Tailwind CSS for styling and Recharts for data visualization. The backend is a simple Express server that fetches weather data from a third-party API.

## ✨ Features

-   **Real-time Weather Data:** Get up-to-the-minute weather information.
-   **City Search:** Find weather forecasts for any city around the world.
-   **Data Visualization:** Interactive charts to visualize weather patterns.
-   **Responsive Design:** A clean and modern UI that works on all devices.

## 🚀 Tech Stack

### Frontend

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Recharts](https://recharts.org/)
-   [Lucide React](https://lucide.dev/guide/packages/lucide-react) (for icons)

### Backend

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [CORS](https://www.npmjs.com/package/cors)

### Monorepo

-   [Turborepo](https://turbo.build/repo)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (v14 or higher)
-   [npm](https://www.npmjs.com/get-npm)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your-username/skylithic.git
    ```
2.  Install NPM packages in the root directory. This will install dependencies for both the frontend and backend. (Since Turbo Repo is used)
    ```sh
    npm install
    ```
3.  You will need an API key from a weather provider to run the backend. Create a `.env` file in the `backend/` directory and add your API key like this:
    ```
    API_KEY=your_api_key
    PORT=3000
    ```

### Running the Application

You can run both the frontend and backend concurrently from the root directory with the following command:

```sh
npm run dev
```

This will start the Vite development server for the frontend and the Nodemon server for the backend.

-   Frontend will be available at `http://localhost:5173`
-   Backend will be available at `http://localhost:3000`

## 📂 Project Structure

This project is a monorepo managed by Turborepo.

-   `backend/`: Contains the Express.js server.
-   `frontend/`: Contains the React client application.
-   `(root)/`: (Optional) For shared code between the frontend and backend.

## 🙏 Acknowledgements

-   [weather-api repo](https://github.com/robertoduessmann/weather-api)

