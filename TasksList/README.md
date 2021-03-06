## Usage

Install the dependencies.
Commands List:

1. **npm start** - starts the express server
2. **npm run migrate** - will create the tables in the database
3. **npm run seed** - will seed data in the tables in the database
4. **npm run down** - will revert the latest migration, run multiple times to revert all.

## Knex

Running the command _npx knex migrate:make some_file_name_ will generate migration file named something like _20210312105123_some_file_name.js_. That random number is actually year + month + day + hour + minutes + seconds so if you want to reorder them you can simply change some of the numbers.

## Project setup process

1. Run the below command to create the **knexfile.js** and edit it by your needs.

```
npx knex init
```

2. Next step is to generate tables migrations files. Run the below command. Note that in the knexfile created with the previous command, we have specified the directory where our generated migrations will be placed. The generated file contains 2 empty functions (up and down) to which knex will be provided.

```
npx knex migrate:make create_table_users
npx knex migrate:make create_table_tasks
```

Side note, if you need to add more tables, just run the above command with the wanted table name to create the migration file and then run the command from step 4 to migrate the table to the database.

3. Next step is to create database. Open pgAdmin and create new database named as specified in the knexfile.js. To create new database right-click on one of your servers or create new server. Then right-click Databases and choose Create.

4. Now after we have our database created, the knexfile and migrations file/files, run the following command to create table/tables in the database.

```
npx knex migrate:latest
```

If everything done correctly in pgAdmin you should see the tables from the migrations folder and also 2 tables generated by knex.

5. Next step is to create the seeds. Run the below command. Note that you don't need to create the seeds folder in db manually, it will be automatically created as specified in the knexfile.js. The newly created file you can also update by your preferences.

```
npx knex seed:make 01_users
npx knex seed:make 02_tasks
```

Side note, if you need to add more seed files, just run the above command and updated the newly created file and then run the command from step 6 to migrate the data to the database.

6. Now after we have seeds file generated and updated with the data we want to seed, run the below command. This command will send the specified data from the seed file to the database and you can inspect the tables in the database.

```
npx knex seed:run
```

IMPORTANT NOTE: because everytime we run this command the data is first deleted and then recreated (as specififed in the files in the seeds folder) id's in the database will increase everytime. Keep that in mind if you face violation error for foreign keys. If you don't want to recreate all of the tables especially users, because for them we use foreign key you have the option to seed only from specific files with the below command:

```
npx knex seed:run --specific 02_tasks.js
```

7. For example later we want to add additional column to one of our tables we can make another migration file. In this example we will add additional column to users table.

Run in the terminal below command to create another migration.

```
npx knex migrate:make add_delete_column_for_users
```

After update of the file content run the below command to migrate changes to the database:

```
npx knex migrate:latest
```
