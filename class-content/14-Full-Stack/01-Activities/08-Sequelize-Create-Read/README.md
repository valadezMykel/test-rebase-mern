- Folder: `08-Sequelize-Create-Read/Unsolved`

- INSTRUCTIONS:

  1. Open the folder and run `npm install`.

  2. Update the `config.json` file's development object with your own local MYSQL database settings.

  3. Add a `todo.js` file to the models directory. Create a `Todo` model with two fields: `text` of type string and `complete` of type boolean. Refer to the User model we created in activity 7.

  4. Navigate to the `api-routes.js` folder.

  5. Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.

  6. Add a Sequelize create method to the POST route to save a new todo to the database using the data sent to the server in req.body.

  7. To test if this worked, open your terminal and run `node server` and navigate to localhost:8080. If you are able to save new todos, you were successful.

  8. Hint: We can access the Todo model here with "db.Todo"

  If you get stuck or finish early, check out the Sequelize Star Wars solution from last class, or try and see if you and your partner can make sense of Sequelize's docs for the findAll and create methods

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-findAll>

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-create>
