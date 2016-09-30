- if you're logged in with Heroku CLI
- navigate to local repository, and use the commands 'heroku create', which creates the heroku app and a local heroku branch,
- then just use 'git push heroku master' to deploy

- remember to have a Procfile
- remember to run the webpack in a postinstall script
- remember to include webpack and all loaders in the regular dependencies

- when specifying clientside WebSocket url, use location.origin, this lets same client-side JS work with local development and Heroku
