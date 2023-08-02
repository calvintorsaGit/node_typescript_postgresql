# CRUD User application - Typescript / Express / PostgresSQL 

## Feature
Api Auth Routes:
- /api/auth/login : To get JWT token if login success
- /api/auth/register: To create user from start with password, email, name

Api User (Protected JWT):
- /api/user/ : To get all user
- /api/user/findUser: To find user with email param
- /api/auth/createUser : Create user with email, name, password param
- /api/auth/updateUser: To update user with email param
- /api/auth/deleteUser : To delete user with email param

## Tech Stack
Express, Sequelize, JWT, Postgres, Jest

## How to run
1. npm install, install dependency
2. install postgres DB locally and config db example in .env
3. npm run start
