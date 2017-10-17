# Detox Bar


###### Run
```
npm instal
DEBUG=loopback:security:* node .

```

## Project Layout
- `common/models` contains the extended user files. `user.js` contains the logic for sending emails and password reset, while `user.json` contains the model definition.
- `server/boot/authentication.js` enables authentication middleware with the `enableAuth()` method. It's this middleware that finds the access token id string (usually from the query string) and appends entire token instance onto the express request object as `req.accessToken`. From there, you can find the user's ID: `req.accessToken.userId` (used in the `routes.js` file, see directly below).
- `server/boot/routes.js` contains all the routing logic. In this example, we have used [Express](http://expressjs.com/) to configure the routing since each LoopBack app is an extended version of an Express app.
- `server/views`contains all the views (or pages) rendered by Express using the [EJS templating framework](http://www.embeddedjs.com/)
- `server/datasources.json` contains the datasource configurations. Here is where we add an email datasource.
- `server/model-config.json` contains the all the model configurations. Here is where we configure the extended user model (lowercase 'u') and the email model. The rest of the models are all built-in LoopBack models.

###### Note
Node (Loopback), AngularJs, Mongo

