## Installation

Check [here](https://sequelize.org/master/manual/getting-started.html) for what packages you need to install depending on the type of the database you use.

## CLI

Check [here](https://sequelize.org/master/manual/migrations.html#installing-the-cli) how to setup sequelize project.

Type in the terminal the below command to expect the options the CLI provides.

```
npx sequelize
```

## Setup

1. Install all the dependencies.
2. With the cli run the below command. It will create some folders (config, migrations, models, seeders) and files.

```
npx sequelize-cli init
```

3. In the _config_ folder update the config.json file.
4. Run in the terminal below command to create the database. The name for the database will be the one provided in the config.json file.

```
npx sequelize db:create
```

5. With the next command we can generate model. We provide the name of the model and attributes it will have. Of course we can later edit the model file manually.

```
npx sequelize model:generate --name User --attributes name:string,city:string
```

6. When we start the application migrations will be created and the sync method will create the tables in the database.

7. With the authenticate method the tables will not be recreated every next time.
