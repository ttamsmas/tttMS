Tic Tac Toe: SPA Board Game
=======================

This application was built to replicate Tic Tac Toe with functionality tracking users and their gameplay records.

---

## Table of Contents

 - Important Links
 - Planning Story
 - User Stories
 - Technologies Used
 - Unsolved Problems
 - Wireframes

---

## Important Links

[Deployed Client](https://ttamsmas.github.io/tttMS-client/)

[Repository](https://github.com/ttamsmas/tttMS-client)

## Planning Story

I developed a high-level plan to ensure I was working on the application in a logical flow before launching:
 - Wireframe User Interface
 - Develop AJAX requests through PATCH requests before game actions to avoid rewriting the code
 - Focus on developing a single game board tile’s functionality and then scale the full application
 - Setup Game Logic including alternating players & only allowing player moves on open spaces
 - Create a tool for evaluating winner & tie
 - Finalize Game Appearance
 - Draft ReadMe
 - Add Functions not required for the game to replicate traditional Tic Tac Toe e.g. computer-controlled gameplay or color selection

User information and records of games are stored in a remote server, which is accessed via AJAX requests. These are primarily stored in the API and GAPI files. Files with the prefix ‘G’ contain gameplay functions while those without hold user functionality.

Gameplay mechanics are accomplished by JQuery and Vanilla Javascript event listeners and functions controlling game messaging and server contact permissions. The game scans for a winner or draw board with each move and updates the server’s record of the game. Many game records are stored on the user’s station as store.'metric' including the User’s ID, the current Game ID, and the current Player Turn.

The basic HTML is styled within the index.scss file and is made to accommodate small or large screen sizes.

## User Stories

 1. As a multi-platform user, I want to be able to load my profile so I can continue my progress.

    2. User Goal: Profile sign in and user record

    2. Developer Goal: Having developed game profiles could increase user playtime and overall engagement.

    2. Acceptance Criteria: Sign-in & sign-out of multiple users

    2. Measurement of Success: The creation of a new user, sign-in, and sign-out works for multiple users via direct testing

 1. As a competitive user, I want to see my win/loss rate so I can show off my abilities

    2. User Goal: Game Statistics Summarizing W/L

    2. Developer Goal: Visualizing and allowing user scores to be sharable could improve competition and user loyalty

    2. Acceptance Criteria: Win-Loss is accurately expressed for new or existing users

    2. Measurement of Success: Audit New User Profile against a manual record of win-loss rate

 1. As a finicky user, I want to be able to end my game in the middle so I don't have to go through the motions of losing.

    2. User Goal: Reset game record and board in the middle of a game

    2. Developer Goal: Making it easier to start a new game means the user is less likely to leave the application because they avoid frustrations like continuing to play a losing game

    2. Acceptance Criteria: New Game is Created and Game Board’s x’s & o’s are cleared

    2. Measurement of Success: Test the New Game button in the middle of playing a round

  1. As a visually stimulated user, I want to select my color so I can keep track of which icon I am applying to.

    2. User Goal: Select Player Color

    2. Developer Goal: Increased ease of gameplay through tools like color selection can make the application more approachable and therefore successful

    2. Acceptance Criteria: Multiple color play options selectable by the user

    2. Measurement of Success: Attempt all color selection options for all user play options

## Technologies Used

 - HTML
 - CSS & Bootstrap
 - Javascript, JQuery, and AJAX

## Unsolved Problems

 - The Game Statistics Functionality could be developed more to represent fields like Win/Loss Rate
 - An automated opponent could make the game more engaging
 - The aesthetics of the board could be enhanced by animations and improved use of color
 - There could be more actions on the board to illustrate victory e.g. a line that appears over the winning tiles
 - The Win-Loss expression could be rewritten as a loop or Dot Modifier

## Planning Wireframes

[Login Landing Page Wireframe](https://imgur.com/9WzSUsq “Login Landing Page”)

[Mobile Game Board Wireframe](https://imgur.com/c3ZaYgL “Mobile Game Board”)

[Regular Screen Board Wireframe](https://imgur.com/mCQosdJ “Regular Screen Board”)
