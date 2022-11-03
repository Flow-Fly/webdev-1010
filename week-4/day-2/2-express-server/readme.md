# Create server

## Create a folder

- In the folder you'll need to use the terminal to execute `npm init -y`
- Install express
- create a `.gitignore` file and specify to ignore `node_modules`
- in your index.js
  - require express
  - create app from express
  - Use app.listen to actually make your server live
  - create a script in package.json which execute `nodemon index.js`
  - Create two routes :
    - `/` will send an html file
    - `/something` which will send an other file
