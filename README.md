# Doctor-List-App

This app lists 9 initial doctors with the ability to sort them by alphabetical order or based on their likes, also the ability to create new doctors and also adding comments for each one of them, in which it will store all of the newly created doctors with their comments in the local SQLite database (`./prisma/doctor-list-app.db`).

## Features
- Implemented considering rich UI/UX methods.
- Responsiveness for mobile, tablet and desktop devices.
- Ability to create new doctor profiles.
- Ability to search doctors based on their names.
- Ability to add new comments to each doctor.
- Ability to view added comments for each doctor on the doctor card.
- Interactive comment icon in which it will alter if the comment textarea is empty or not or if its expanded or collapsed.
- Enrich with multiple sorting methods
    - Alphabetical (A - Z)
    - Alphabetical (Z - A)
    - Likes (Highest First)
    - Likes (Lowest First)

## Tech Stack
- Next.js
- React.js
- TypeScript
- TailwindCSS
- Prisma
- SQLite

## Requirements
- `NodeJS v20+`
- `npm v10+`

## How to Use

1. Install the requirement(s) above.

2. `cd` into the project root directory.

3. Run `npm install` to install required packages.

4. Run `npm run database` to generate prisma db, migrate it, and seed it with initial data. **(Important!)**

5. Run `npm run dev` for running the app in development mode.

6. Run `npm run build` and then `npm run start` for running the app in production build mode.

7. Open the browser of your choice and go to http://localhost:3000.

8. **Enjoy playing around with the app :)**