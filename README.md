# To-Do App - Hexagonal Architecture
>This is a simple task management application that allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. It provides endpoints to manage tasks via an HTTP API.

## :speaker: How it works

### Base URL

The base URL for all API endpoints is http://localhost:3000/home/

### Endpoints
Retrieve All Tasks
```
    Description: Retrieves a list of all tasks currently stored in the system.
    HTTP Method: GET
    Endpoint: /tasks
    Request Parameters: None
    Response: An array of task objects, each containing details such as ID, title, description, status, etc.
```

Retrieve a Specific Task
```
    Description: Retrieves details about a specific task identified by its unique ID.
    HTTP Method: GET
    Endpoint: /tasks/:id
    Request Parameters:
        id (integer): ID of the task to retrieve.
    Response: A task object containing details about the requested task.
```

Create a New Task
```
    Description: Adds a new task to the system.
    HTTP Method: POST
    Endpoint: /tasks
    Request Body: JSON object representing the new task, including details such as title, description, status, etc.
    Response: Success message indicating the task has been created.
```

Update an Existing Task
```
    Description: Updates an existing task with new information.
    HTTP Method: PUT
    Endpoint: /tasks/:id
    Request Parameters:
        id (integer): ID of the task to update.
    Request Body: JSON object representing the updated task details.
    Response: Success message indicating the task has been updated.
```
Delete a Task
```
    Description: Deletes a task from the system.
    HTTP Method: DELETE
    Endpoint: /tasks/:id
    Request Parameters:
        id (integer): ID of the task to delete.
    Response: Success message indicating the task has been deleted.
```

## 🕹 Features

- ```Architecture Hexagonal``` <br/>Organizes the application around a central core, isolating domain logic from external concerns.<br/>

- ```Middlewares``` <br/>Functions that intercept and process requests and responses, providing reusable, cross-cutting concerns such as logging, authentication, or error handling.<br/>

- ```API Rest``` <br/>Implements a representational state transfer (REST) architecture, providing a standardized way of building web services that are scalable and interoperable.<br/>

- ```TDD``` <br/>Development process where tests are written before the code, guiding the implementation and ensuring code quality and correctness.<br/>

- ```CD/CI``` <br/>Streamlines the development workflow by automating the integration, testing, and deployment processes for faster and more reliable software delivery.<br/>

## :building_construction: Hexagonal Architecture

The Hexagonal Architecture, also known as Ports and Adapters is a design pattern that emphasizes the separation of concerns and the independence of the core business logic from external dependencies.

### Benefits

- **Modularity:** The architecture promotes modularity by clearly defining boundaries between different parts of the system, making it easier to understand and maintain.

- **Testability:** Separating the core domain from external dependencies simplifies testing, as it allows for easier mocking and isolation of components during testing.

- **Flexibility:** The Hexagonal Architecture allows for changes to external systems or technologies without impacting the core domain logic, providing flexibility and future-proofing.

### Structure


```
src/
|
├── application
|    ├──services              // Application services
|    └── dtos                 // Data Transfer Objects
|
├── domain
|    ├── entities             // Business entities
|    └── interfaces           // Domain interfaces
|
├── infrastructure
     ├── database             // Persistence layer implementations
|    ├── repositories         // Handle the persistence of domains
|    └── services             // Infrastructure services
|
└── interfaces
     ├── controllers          // HTTP request handlers
     ├── routes               // API route definitions
     └── middlewares          // Middleware functions

```

```application:```  
- Application services coordinate high-level operations involving multiple domain entities.
- DTOs are used to transfer data between processes or components, without any business logic.

```domain:``` 
- Entities are the main business objects of the application. Value objects are immutable objects distinguished only by the state of their properties.
- Domain interfaces define the operations that can be performed on entities and value objects.

```infrastructure:``` 
- Repositories handle the persistence of entities.
- Infrastructure services can be anything that provides technical capabilities, such as sending emails, data persistence, etc.

```interfaces:``` 
  - Controllers handle HTTP requests and delegate work to application services.
  - Routes define the HTTP routes of your application.
  - Middlewares are functions that have access to the request object, response object, and the next middleware in the application's request/response cycle.


## :floppy_disk: Technologies
- Node.js
- Express.js
- Typescript
- Jest
- ESLint
- Prettier
- nodemon
- VSCode Debugging
- Thunder Client
- Github Actions

## :space_invader: Scripts

### Testing:

```sh
npm run test
```

Run tests ignoring those existing in dist/

### Prettier format:

```sh
npm run prettier-format
```

Manually run Prettier in the project, I recommend installing the Prettier extension and having it auto-run on save.

### Watcher:

```sh
npm run dev:watcher
```

Run nodemon using src/index.ts as the entry file.

### Dev Run:

```sh
npm run dev:run
```

Run the project without a watcher.

### Build:

```sh
npm run build
```

Compile the project into dist/

---

## Debugger

The debugger configuration points to src/index.ts as the project's entry file.
The debugger configuration is located in the .vscode/launch.json file.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Lanza debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

---
## :unlock: Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes to your branch.
Submit a pull request targeting the develop branch.
For bug reports and feature requests, please open an issue on the GitHub repository.

## :mortar_board:License
This project is licensed under the MIT License. See the LICENSE file for more information.


