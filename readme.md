### Steps for Execution

- You need have docker installed on your machine to run the project
- clone the project using the given command
   
   <pre>git  clone  <github-url></pre>
- <pre> docker compose up --build -d </pre>
- To build and run the services 
- The docker compose file runs postgres, hasura-engine, nextjs frontend in detached mode
- frontend application would be deployed at [http://localhost:3000](http://localhost:3000)
- You can check the hasura console at [http://localhost:8080](http://localhost:8080)
<br>
<br>
> the application is seeded with initial data which is done with the help of migrations 
- I have used ```hasura-cli``` to generate migrations
- [reference link](https://hasura.io/blog/moving-from-local-development-staging-production-with-hasura/) for seed migrations 

 ![alt]('/../assets/Screenshot%20(17).png)
 ![alt]('/../assets/Screenshot%20(18).png)
 ![alt]('/../assets/Screenshot%20(19).png)
 ![alt]('/../assets/Screenshot%20(20).png)






