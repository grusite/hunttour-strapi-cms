# Hunttour Backend (Strapi CMS)

The backend of hunttour game app by [strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html).

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

  $ sudo apt install nodejs
  $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

    $ npm install -g yarn

---

## Installation

```bash
$ git clone https://github.com/grusite/hunttour-strapi-cms.git
$ cd hunttour-strapi-cms
$ yarn install
```

## Configure app

Create a `.env` file from the `.env.example` template file and then edit it with your settings. You will need:

- Mongo Atlas DB URL;
- Cloudinary credentials;

## Running the app

```bash
# start the app in production mode
$ yarn build
$ yarn start

# start the app in dev mode
Run node locally first: mongod --dbpath='/c/Users/jordi/data/db'
$ yarn develop

# heroku deployment
$ yarn build:heroku
```

## Usage

It will let you to manage the games using the Strapi UI.

## License

[MIT](https://choosealicense.com/licenses/mit/)
