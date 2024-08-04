
# Prisma/Next.js Project

This is a full-stack web application built with Next.js and Prisma.


## Getting Started

To get a local copy of this project up and running, follow these simple steps.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional, for running a local database instance)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart) (optional but recommended)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ali1316/Next-prisma.git
  
2 . Install the dependencies:
    ```bash
    
    npm install
    # or
    yarn install
    ```

3. Setup The Database
   if you have issues with the connection to the supabase database change make this changes in the prisma schema to run it locally 
 ```bash 
  datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
 }
 ```
-  to push the schema to the db use the db push command (only if you initialized a new db)
 ```bash
  
   npx prisma db push
   # and then to view the data and schema
   npx prisma studio
```

4.To run the project


```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
 ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



