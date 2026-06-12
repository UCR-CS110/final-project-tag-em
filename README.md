[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/c4wSHrp5)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23901319&assignment_repo_type=AssignmentRepo)

<h1> Project Description & Working Sections</h1>
Tag'em is a networking platform that allows recruiters to easily match good fit candidates with job postings. It works by creating an interface where users can privately “tag” people into fits that they would be good for based on their personal knowledge of the connection. Then, when users are looking for hirees, they are able to selectively broadcast their positional opening to good fits within their network.

The working sections are the Jobs page, Meetups page, Connections page, and Profile Page.
In the jobs page, there are three input fields: Job title, Company, and Location. Once these are inputted and submitted, a new item is created and saved with these inputs, and shown as a recommended Job posting for the user. The next feature to add here is to add a tags input field on the page, so the application can send the user’s job posting to the people under the tag they have selected.
The Meetups page has three input fields: Event name, location, and date. These are used to filter events to find the one you are looking for/interested in. The next step for us here is to add the create an event component, so users can add events to the site.
The Connections page has an input field to filter connections by name. It also has components for individual connections. The next step is to complete the connections filter functionality, add tag update functionality, and add connect functionality.
The Profile page has 5 sections: Name, Pronouns, and Occupation; Bio; Resume; Network; Posts. Name, Pronouns, and Occupation and Bio are editable. The next steps are to allow the Resume to be updated, link the Networks section to the Connections page, and dynamically update the Posts section.


<h1> Deployment Instructions </h1>
In order to deploy our code, first you must have PostgreSQL installed on your machine. For MacOS users, I recommend simply installing it via Homebrew. Then, start up a database on your local machine using the command
"brew services start postgresql@18" *to stop, same command but replace start with stop. 
From here, simply clone the repo and set up your .ENV file as a loose file in the backend folder. Important to note, in your .ENV file you will want to have 
"DATABASE_URL=postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME". 
Next, open a terminal for both the backend (Directory labeled "backend") and frontend (Directory labelled "TagEm" then change directories to the "TagEm" folder and run the commands "npm install" in each terminal. In your backend terminal, you will additionally want to run 
"npm run migrate:up" as this will set up your local DB to work properly with our code. 
From, there followed by "npm run dev" on each terminal, and this will provide a locally hosted link to view our website.

<h1> Tools Used </h1>
So far we have used React for our frontend development, PostgreSQL for our database, express for our backend, ....
