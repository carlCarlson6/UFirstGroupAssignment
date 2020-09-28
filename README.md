# UFirst Group Assigment

This is my solutin to the assigment for software engineer position at UFirst GmbH. 
Here you will find the following folders:

- 1_trasnformation_script - Solution for the first part of the assigment. 
- 2_charts_app - Solution for the second part of the assigment.


## 1_transformation_script

Contains a script written in python that will read the epa logs from `.\data\epa-http.txt` and transform them into a more convenient json format. The output file will be located at `.\data\epa-http.json`.

To run the script open the terminal on the folder and run `python main.py`. I have used the python version 3.6.8 64-bit, you can get it from [here](https://www.python.org/downloads/release/python-368rc1/).

## 2_charts_app

Web app that will retrieve the data from a database (MongoDb Atlas), process it and send it to the frontend so the selected chart could be displayed.

The frontend (**client** subfolder) consists of a React app and the backend (**backend** subfolder) is an express api, both parts are written with Typescript.

Also I have deployed the full solution:

 - Frontend - https://ufirst-charts-app.netlify.app/
 - Backend - https://ufirst-server-002.azurewebsites.net/ - the backend has the following routes and methods:
	 - `GET /api/req/time` - fetch the request per minute data.
	 - `GET /api/req/methods` - fetch the request methods data.
	 - `GET /api/ans/sizes` - fetch the response sizes data.
	 - `GET /api/ans/codes` - fetch the response codes data.

### About local testing:

- **Client:** If you wish to local test the fronted against the deployed backend server replace the content from `client/.env.development.local` with `REACT_APP_BACKEND_URL=https://ufirst-server-002.azurewebsites.net/ api` otherwise you will have to run the backend server locally.

- **Backend**: Before running `npm start` or `npm run dev` you should execute first `npm run build` or `npm run ts` respectively (`npm run ts` on another terminel since it watches for changes on the files and recompiles it). Also to start the backend server locally you should have to create your MongoDb cluster, create a database named 'UFirstAssigment' and a collection 'EpaData' where the output json file from the previous section should be upload. Then add the connection string at `backend\dev.env`.

Alternatively I have created a replica of the backend code (backend_local subfolder) where, instead of connecting to the database and retrieving the data, reads it from the output json file if you do not want to deal with a database when local testing. 
You can see that between both folders the only code diference is at `./source/index.ts` where the connection to the database is omitted and at `./source/data/Repository.ts`.


### About the deployed backend:

Due to infrastructure and budget constraints the response time of the server is around the 20-40 seconds and if multiple request are executed at the same time it can go up to 1 minute.

The limitations are due by the following bottlenecks:

 1. Database: I am using MongoDb Atlas M0 cluster (free tier) which only allows 100 operations per second.
 2. Web Server: for the backend I'm using an Azure Web App S2, although is used for production I feel that it lacks power to process all the 47748 records.

Also before deploying onto Azure I tried on heroku. I switched of provider due to the fact that all request to a heroku server have a timeout of 30 seconds even-if I am handling server errors on the client this timeout was reached very easily and was not user-friendly.

 

 
