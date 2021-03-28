# Pipedrive and Bling Integrator

Project developed as a technical challenged for the role of Node.js Backend Developer at LinkApi. The challenge is to create an API that enables customers
to sync their Pipedrive deals with their Bling sells and update record in a MongoDB database that mainly holds the sum of sells for each day.

## My approach
I've created an API, whose structure is based on the principles of the Clean Architecture proposal and the code follow the principles from the Clean Code Book.
Is valid to remember that those guidelines aren't perfectly applied, as some restrictions due to tools and time made it not possible.
<br>
For the webserver framework, the project uses [Express](https://expressjs.com/), it is also used [Mongoose](https://mongoosejs.com/) to manage the connection with MongoDB
and allow easy read/write on the go, lastly, [Axios](https://github.com/axios/axios) is used for doing web requests, it was choosen mainly for it easy instantiation tools.

## Project setup [Development environment]
- Install dependencies
```bash
$ yarn
OR
$ npm i
```
- Create your .env file
>> There is an `.env.example` file in the project root to help in the creation of a .env file
- Run the project
```bash
$ npm run start-dev
```
> It will run a local web server under the 3030 port.
## Endpoints:
### GET /sync
This endpoint runs the main flow that pulls data from Pipedrive, send them to Bling and write the daily total sums in MongoDB.
### GET /sync-detached
This endpoint runs the main flow in the background as a detached process, freeing up the API and ending the request.

## Run the sync routine in a scheduled way
Depending on your OS, create a CRON similar routine that runs `src/detached.js` in the interval desired.