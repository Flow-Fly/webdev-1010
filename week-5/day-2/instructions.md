# Let's CRUD together

- Use `express-generator` or `ironlauncher` to create your server

```sh
npx express-generator name-of-my-server --hbs
```

```sh
npx ironlauncher@latest name-of-my-server
```

> If using ironlauncher, be sure to install the "views" one, not JSON or fullstack.

- Add a Pet model, a pet should have a name, a type (dog, cat, bird??)
- Update the Users model (had an Array of ObjectId which refer to the pet collection!)

- optional: Create a seed for the users and the pets

- Create a router for the users and a router for the pets
