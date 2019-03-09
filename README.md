# <img src="https://chiefdakota.github.io/react-on-rails-spa/app/javascript/packs/assets/images/yay-fox.gif" alt="Yay Fox gif" /> React-on-Rails SPA <img src="https://chiefdakota.github.io/react-on-rails-spa/app/javascript/packs/assets/images/yay-fox.gif" alt="Yay Fox gif" />

## Setup
_We recommend using a Ruby version manager such as_ [`rbenv`](https://github.com/rbenv/rbenv) _and a Node version manager such as_ [`nvm`](https://github.com/creationix/nvm)

* `cd` into the project directory
* install Ruby v2.5.0 and gems
    ```xml
    rbenv install 2.5.0
    rbenv local 2.5.0
    gem install bundler
    bundle install
    ```
* generate a Rails Master Key
    * run the following to generate the Rails Master Key and files, and open the new `/config/credentials.yml.enc` file in Vim
        ```xml
        EDITOR=vim rails credentials:edit
        ```
    * the file should show your new `secret_key_base`
    * type `:wq` and press `[RETURN/ENTER]` to save and exit
* create an `.env` file
    * create a duplicate of `.env.example` and name it `.env`
    * replace the `RAILS_MASTER_KEY` value with your new Master Key (found in `/config/master.key`)
    * update the `BASE_URL` value (if required, depending on your setup)
* install Node v11.10.0, Yarn, and packages
    ```xml
    nvm install 11.10.0
    brew install yarn --ignore-dependencies
    yarn install
    ```
* create databases
    ```xml
    rails db:create
    rails db:migrate
    rails db:seed
    ```
## Running Locally
### Running using [foreman](https://github.com/ddollar/foreman)
_**PLEASE NOTE:** Per_ `foreman`_'s docs we recommend installing the gem in your home directory instead of the project directory_

* `cd` into your home directory
* install `foreman`
    ```xml
    gem install foreman
    ```
* `cd` back into the project directory
* start `foreman`, which runs the `Procfile.dev` and will start a [Rails](https://github.com/rails/rails) server and [Webpacker](https://github.com/rails/webpacker)
    ```xml
    foreman start -f Procfile.dev
    ```

### Running Rails and Webpacker separately
* `cd` into the project directory
* start a [Rails](https://github.com/rails/rails) server
    ```xml
    bundle exec rails server -p 5000
    ```
* in a separate Terminal window/tab/pane, `cd` into the project directory, and start [Webpacker](https://github.com/rails/webpacker)
    ```xml
    bin/webpack-dev-server
    ```

### Troubleshooting
* try running the following if getting non-deterministic issues when installing, starting the servers, compiling,...
    ```xml
    yarn upgrade
    ```

## :star: Collaborators :star:
[ChiefDakota](https://github.com/ChiefDakota)
<br />
[DenisePillette](https://github.com/DenisePillette)
