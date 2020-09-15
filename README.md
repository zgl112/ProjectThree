# ProjectThree 
---

Project Three is a projected created by Stephane Emptage and Alex Paiu whilst training in their apprenticeship. It is a proof of concept to show the business a prototype of what a React based recruitment site would look like and how it would work, when the business eventually transitions to using React.  


### Tech Stack and technologies used:

- React Hooks
- TypeScript
- C# 
- ElasticSearch
- Visual Studio / Code
- Docker
- Postman
- Fiddler
- Auth0

### Steps to use our project!


1. Copy and clone our repository.

2.  This step will require to have Docker installed. If you don't have Docker installed, you can get a copy from [here](https://www.docker.com/products/docker-desktop). Using your terminal, navigate to the docker-elk folder from our repository and run the `docker-compose up -d` script. This will initialise a new Docker image which will run both ElasticSearch and Kibana.  Optional : If you don't want to install Docker onto your machine, you can go to this site: [Elastic Cloud](https://cloud.elastic.co/registration?elektra=downloads-overview&storm=elasticsearch) and register to get a free 14 days trial. You will then be provided with a username, password and a URL. These will need to be added to the appsettings.json file from the API folder, this will allow your data to be saved online.

3. As some files were excluded for brevity during commits, you need to navigate to the client-app folder and run the `npm install` script. This will install all the packages used to develop this project.

4. You need to visit Reed's [website](https://www.reed.co.uk/developers/jobseeker) and sign up for an API key. You need to add this to the appsettings.json file located in the API folder. 

5. To configure the Auth0 service you need to visit their [website](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D)  and create a free account. It will allow you to have up to 7,000 free active users & unlimited logins. The credentials received will be placed in the .env file inside the client-app folder.

6. After the installer has finished the step above, you can now run the `npm start` script to start our applications. It will launch your browser and direct to your local host: [here](http://localhost:3000).

7. Navigate to the API folder,  then run the `dotnet watch run` script. This will spin up the back-end services.

8. Once the website loads, please go to the Courses tab in the navigation bar. Press and hold down shift + z. This will reveal a button that you have to press which will automatically export jobs from the recruitment API and import them into your ElasticSearch cluster. Allow some time for this process to load. 

### Suggestions

We are open to any suggestions and feedback. Please consider that we tried to follow industry standard software development principles and we had no knowledge of using React prior to this project. 



