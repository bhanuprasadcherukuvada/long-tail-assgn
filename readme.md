### Steps for Execution

- You need have docker installed on your machine to run the project
- clone the project using the given command
   
   <pre>git  clone https://github.com/bhanuprasadcherukuvada/long-tail-assgn.git</pre>
- <pre> docker compose up --build -d </pre>
- To build and run the services 
- The docker compose file runs postgres, hasura-engine, nextjs frontend in detached mode
- frontend application would be deployed at [http://localhost:3000](http://localhost:3000)
- You can check the hasura console at [http://localhost:8080](http://localhost:8080)
<br>
<br>
- the application is seeded with initial data which is done with the help of migrations.
- I have used ```hasura-cli``` to generate migrations.
- i used this [resource](https://hasura.io/blog/moving-from-local-development-staging-production-with-hasura/) for seed migrations 

 ![alt]('/../assets/Screenshot%20(17).png)
 ![alt]('/../assets/Screenshot%20(18).png)
 ![alt]('/../assets/Screenshot%20(19).png)
 ![alt]('/../assets/Screenshot%20(20).png)


 ### Adding remote Schema
   - I have used 2nd use case in the given [blog](https://hasura.io/blog/remote-joins-a-graphql-api-to-join-database-and-other-data-sources/). 
   - Run   `hasura metadata apply` to update the metadata which includes config regarding remote schema after adding remote schema using hasura console.



### How it works ? 

- we have a `long_tails` table in the postgres database 
- `long_tails` have `tail` and `json_id` in the table 
- `json_id` is used as a join key with a remote schema 
- In `backend` we run a `apollo server` which has a  `post_info` type which is added to `long_tails` table with `json_id` as join key 
- With this we can fetch  `title` and `description` with remote join in hasura.
- We can fetch both json_id and title and description in single fetch corresponding `tail` 
- The advantage here is that we are avoiding mutiple calls and reducing network time
- We have json file in backend so that we can make updates to the json file and they will be reflected in the frontend on page reload 


### Link to the deployement
   - [https://long-tail-assgn.vercel.app/](https://long-tail-assgn.vercel.app/)

   - For the purpose of deployement, I used [vercel](https://vercel.com) platform for deploying nextjs 
   - For hasura graphql engine,I used [hasura cloud](https://hasura.io/cloud/)
   - For remote Schema I deployed it on [glitch](https://glitch.com)
  


### Alternative deployement
   - we can use ECS service for deploying the docker compose services directly






