[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/c4wSHrp5)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23901319&assignment_repo_type=AssignmentRepo)

<h1> Project Description </h1>
Tag'em is a networking platform that helps recruiters easily match good fit candidates with job postings. It works by creating an interface where users can privately “tag” people into fits that they would be good for based on their personal knowledge of the connection. Then, when recruiters are looking for hirees, they are able to selectively broadcast their positional opening to good fits within their network.

<h1> Team Member Contributions</h1>
Jayanth was responsible for the meetups frontend and backend, Gabriel was responsible for the profile frontend and backend, Daniel was responsible for the connections frontend and backend. We all worked on the Jobs page and tagging, Admin role, and authorization together.

<h1> Feature List </h1>
Tag'em currently has a regular login using an email and password and a google oauth login.

<h1> Deployment Instructions </h1>
In order to deploy our code, first you must have PostgreSQL installed on your machine.
<h3>For MacOS users </h3> We recommend simply installing it via Homebrew. A similar installer to the Windows installer is available if that's preferred.  Then, start up a database on your local machine using the command. To stop, same command but replace start with stop.
<ul> - "brew services start postgresql@18" </ul>
<ul> - "brew services stop postgresql@18"</ul>
<h3>For Windows users</h3>
We recommend installing from the interactive installer on the PostgreSQL website. You could use either the GUI app "pgAdmin 4" or terminal app "SQL Shell (psql)" that the recommended installer provides to set up your local database

<h3> Cloning the Repo and Setup
</h3>
<p>From here, simply clone the repo and set up your .env file as a loose file in the backend folder. <b>Important to note, in your .env file you will want to have these variables defined:</b></p>
<ul>DB_USER</ul>
<ul>DB_PASSWORD</ul>
<ul>DB_HOST</ul>
<ul>DB_PORT</ul>
<ul>DB_NAME</ul>
<ul>DATABASE_URL  ("a sample assignment for this is: postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME") </ul> 
<ul>GOOGLE_CLIENT_ID=500493451470-a7d8cn2ve1v61mml864v6r228thggmbi.apps.googleusercontent.com</ul>
<ul>GOOGLE_CLIENT_SECRET=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</ul>
<p><b>We recognize it is terrible practice to include both the Client ID and Client Secret, this is done solely for proper usage of local deployments. In real deployment, these would not be pubicly shared. </b>Next, open two terminals, one from the backend (Directory labeled "backend"), and one from the frontend (Directory labelled "TagEm"), then, run the following commands:</p>
<p>Frontend:</p>
<ul>"npm install" </ul>
<ul>"npm run dev" </ul>

<p>Backend:</p>
<ul>"npm install"</ul>
<ul>"npm run migrate:up"</ul>
<ul>"npm run dev" </ul>

You can now use TagEm by pasting the localhost link given to you in the frontend terminal into your local browser.

This will provide a locally hosted link to view your local deployment of our website.

<h1> Tools Used </h1>
For our frontend development:
<ul> - React, React-Router. </ul>
For our backend development:
<ul>- Node.js, Express, Multer, Bcrypt, Google OAuth, and Passport.</ul>
For our database:
<ul>PostgreSQLFor and node-pg-migrate.</ul> 

<h1> Details on AI usage </h1>
We used Generative AI for our CSS Styling, and to learn how to work with new frameworks like the pg library. We also used it heavily to troubleshoot backend errors.
