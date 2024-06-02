# Sales Dashboard Tracker.

## Table of Contents

1. [Project Description](#description)
2. [Running Locally](#running)
3. [Tech Stack](#tech-stack)
4. [Sample Credentials](#credentials)
5. [Sample Images](#Project-outlook)

### Description

- A Sales Aagent dashboard that allows users to track product sales by clients(schools). It allows Adding of schools and then linking them with Zeraki Products. Thereafter, users can create invoices based on product usage and create collections based on paymen statuses.

### Running locally

- In the terminal of a machine with [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en) installed, run:

```
git clone https://github.com/vicowiti/client-side.git
```

-This will copy the repository contents to your local machine.
-To install project dependencies, run:

```
cd client-side

npm install
```

-To run the mock server, ensure you are in the project root then run:

```
npx json-server --port 30001 --watch db/db.json
```

-This allows running the mock server without the need to install the [JSON Server](https://www.npmjs.com/package/json-server) locally.

-Finally, in another terminal and while at the project root, run:

```
npm run dev
```

- This opens a local dev server on port 5173. Open a browser window and type in the address "http://localhost:5173"

### Tech Stack

- React JS
- Typescript
- React Router
- Tailwindcss with Headless UI
- Vitest
