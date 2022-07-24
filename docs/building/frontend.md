# Frontend

## Prerequisites

-   [NodeJS 16](https://nodejs.org/en/download/)

## Build Guide

### Get the source code

You can either just download or clone the source code using git.

#### Downloading from Github

Just [download the source code](https://github.com/DesterLib/Frontend/archive/refs/heads/develop.zip) from the Dester's [frontend repo](https://github.com/DesterLib/Frontend) from GitHub as a zip and extract it.

#### Cloning the repository

Just clone the repository using the command

> ⚠️ **Note** :- you'll have to install `git` in your machine.

```sh
git clone https://github.com/DesterLib/Frontend.git
```

#### Install node dependencies

- Open a terminal at the root of the the frontend folder
- Install the Node dependencies with using the following commands
```sh
npm install
```

#### Exporting a static production build

In the terminal, execute:
```sh
npm run build
```

>A `build` folder will be created which can be used for production.

#### Copying the build files

Now after you successfully finished buiding the frontend, copy the `build` folder to [backend folder](/building/backend.md#backend-setup).
