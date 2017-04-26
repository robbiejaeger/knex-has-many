# Knex Relationships

Experiments with ExpressJS backend API and Knex one-to-many and many-to-many relationships. The premise of this app is blog posts with comments (one-to-many) and categories (many-to-many).

File structure modeled after Rails structure (controllers, models, routes).

## Setup

1. Clone this repo and `cd` into the new directory.
2. In the terminal, run `npm install`.
3. Add `knex_has_many` and `knex_has_many_test` databases to postgres.

## Run Tests

In the terminal, run `mocha`. (You must have Mocha installed globally for this command to work.)

## Run App

In the terminal, run `node server.js` and head over to `localhost:3000`.
