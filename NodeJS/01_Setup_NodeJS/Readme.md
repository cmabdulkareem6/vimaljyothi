# Setting up a NodeJS environment (if you don't have NodeJS already installed)
1. Download NodeJS from https://nodejs.org/en/download/
2. Install NodeJS
3. Open VS Code with a project folder
4. Open Terminal and type "node --version" to check if NodeJS is installed

## Initializing a NodeJS project
1. Open Terminal and type "npm init -y" to initialize a NodeJS project (this will add a package.json file to the project folder)
2. inside the package.json file, change "type" to "module", add "type":"module" if not existing.
3. Create a new file called "index.js" (this will be our main file for NodeJS)

## Running a NodeJS file
1. Open Terminal and type "node index.js" (this need to be done everytime we make changes to the index.js file)
2. To make things easier, we can add a script to package.json file called "start" that will run "node index.js" automatically when we run "npm start"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
```

## Running a NodeJS file with nodemon (a thirdparty tool that will run our NodeJS file automatically when we make changes to it)
1. Open Terminal and type "npm install -g nodemon" to install nodemon globally
2. Open Terminal and type "nodemon index.js" (this need to be done everytime we make changes to the index.js file)
3. To make things easier, we can add a script to package.json file called "start" that will run "nodemon index.js" automatically when we run "npm start"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```



