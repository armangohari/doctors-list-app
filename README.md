# Doctor-List-App

This app lists 9 initial doctors with the ability to sort them by alphabetical order or based on their likes, also the ability to create new doctors and also adding comments for each one of them, in which it will store all of the newly created doctors with their comments in the local SQLite database (`./prisma/doctor-list-app.db`).

Desktop View             |  Mobile View
:-----------------------:|:------------:
![Image of the doctor-list-ap desktop view](/public/assets/images/app-desktop-view.png)  |  ![Image of the doctor-list-ap mobile view](/public/assets/images/app-mobile-view.png)



## Features
- **UI/UX Implementation**: Implemented considering rich UI/UX methods.
- **Responsiveness**: Responsiveness for mobile, tablet, and desktop devices.
- **Profile Creation**: Ability to create new doctor profiles.
- **Doctor Search**: Ability to search doctors based on their names.
- **Comment Addition**: Ability to add new comments to each doctor.
- **Comment Viewing**: Ability to view added comments for each doctor on the doctor card.
- **Interactive Comment Icon**: Interactive comment icon that alters if the comment textarea is empty or not, or if it’s expanded or collapsed.
- **Multiple Sorting Methods**:
    - **Alphabetical (A - Z)**: Sort doctors alphabetically from A to Z.
    - **Alphabetical (Z - A)**: Sort doctors alphabetically from Z to A.
    - **Likes (Highest First)**: Sort doctors by likes, highest first.
    - **Likes (Lowest First)**: Sort doctors by likes, lowest first.


## Tech Stack
- Next.js
- React.js
- TypeScript
- TailwindCSS
- Prisma
- SQLite

## Requirements
- [NodeJS v20+](https://nodejs.org/en/download/package-manager)  (npm included)
- npm v10+
- [SQLite v3+](https://www.sqlite.org/download.html)


## How to Use

1. Install the requirement(s) above.

2. Clone the repository using `git clone https://github.com/armangohari/doctors-list-app.git` command.

3. `cd doctor-list-app` for getting into the project root directory.

4. Run `npm install` to install required packages.

5. Run `npm run database` to generate prisma db, migrate it, and seed it with initial data. **(Important!)**

6. Run `npm run dev` for running the app in development mode.

7. Run `npm run build` and then `npm run start` for running the app in production build mode.

8. Open the browser of your choice and go to http://localhost:3000.

9. **Enjoy playing around with the app :)**