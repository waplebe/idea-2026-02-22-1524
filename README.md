# Simple Task Manager API

**Description:**

This project provides a simple RESTful API for managing tasks. It allows users to create, read, update, and delete tasks. The frontend provides a basic interface for interacting with the API.

**Why it's useful:**

A task manager is a fundamental tool for productivity. This API provides a foundation for building more complex task management applications or integrating task management functionality into existing systems.

**Installation:**

1.  **Clone the repository:**
    ```bash
    git clone https://github/your-username/simple-task-manager.git
    cd simple-task-manager
    ```

2.  **Set up the backend:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Set up the frontend:**
    ```bash
    npm install
    npm run build
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root directory with the following content (replace with your actual values):
    ```
    DATABASE_URL=sqlite:///tasks.db
    ```

**Running the application:**

1.  **Start the backend:**
    ```bash
    python app.py
    ```

2.  **Start the frontend:**
    ```bash
    npm start
    ```

**API Endpoints:**

*   `GET /tasks`: Retrieves all tasks.
*   `GET /tasks/{id}`: Retrieves a specific task by ID.
*   `POST /tasks`: Creates a new task.  Request body should be a JSON object with `title` and `description` fields.
*   `PUT /tasks/{id}`: Updates an existing task. Request body should be a JSON object with `title` and/or `description` fields.
*   `DELETE /tasks/{id}`: Deletes a task by ID.

**Example Usage:**

*   **Create a task:**
    `curl -X POST -H "Content-Type: application/json" -d '{"title": "Grocery Shopping", "description": "Buy milk, eggs, and bread"}' http://localhost:5000/tasks`

*   **Get all tasks:**
    `curl http://localhost:5000/tasks`

*   **Get a specific task:**
    `curl http://localhost:5000/tasks/1`

**New Features:**

*   **Task Creation with Input Validation:** The frontend now prompts the user for task title and description when adding a new task.  It includes basic validation to ensure a title is provided.
*   **Error Handling:**  The API now returns 400 Bad Request if the title is missing when creating a task.
*   **Task Representation:** Added `__repr__` method to the `Task` model for easier debugging and logging.

**Testing:**

Added basic tests to verify the functionality of the API endpoints.

**Documentation:**

Updated the README.md file to reflect the new features and provide clear instructions for running the application.