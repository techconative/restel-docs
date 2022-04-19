# Restel Documentation

Documentation repository for the no(low)code test automation framework [Restel](https://github.com/techconative/Restel).

### Installation

After cloning this repository, setup dependencies:
```
$ yarn
```

### Start local development server

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Changes are reflected live without having to refresh page or restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
