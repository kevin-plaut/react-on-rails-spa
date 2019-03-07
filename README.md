# <img src="https://chiefdakota.github.io/react-on-rails-spa/app/javascript/packs/assets/images/yay-fox.gif" alt="Yay Fox gif" /> React-on-Rails SPA <img src="https://chiefdakota.github.io/react-on-rails-spa/app/javascript/packs/assets/images/yay-fox.gif" alt="Yay Fox gif" />

## Setup
_We recommend using a Ruby version manager such as_ [`rbenv`](https://github.com/rbenv/rbenv) _and a Node version manager such as_ [`nvm`](https://github.com/creationix/nvm)

In Terminal `cd` into the project directory (if not already there) and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to setup the app:
```xml
# Install Ruby on Rails and Gems
rbenv install 2.5.0
rbenv local 2.5.0
gem install bundler
bundle install

# Generate Rails Master Key
EDITOR=vim rails credentials:edit
# entering the above command should open a Vim editor
# save and exit by entering `:wq` and hitting [RETURN/ENTER]
# after saving the Rails Master Key files will be automatically generated in the /config folder

# Install Node, Yarn, and Packages
nvm install 11.10.0
yarn install

# Create Database
rails db:create
rails db:migrate
rails db:seed
```

## Running Locally
### Running with [foreman](https://github.com/ddollar/foreman)
_Ruby users should take care not to install foreman in their project's Gemfile_

In a separate Terminal window/tab/pane, `cd` into the project directory (if not already there), and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to start a [Rails](https://github.com/rails/rails) server and [Webpacker](https://github.com/rails/webpacker):
```xml
foreman start -f Procfile.dev
```

### Running Rails and Webpacker separately
In a separate Terminal window/tab/pane, `cd` into the project directory (if not already there), and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to start a [Rails](https://github.com/rails/rails) server:
```xml
bundle exec rails server -p 5000
```

In a separate Terminal window/tab/pane, `cd` into the project directory (if not already there), and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to start [Webpacker](https://github.com/rails/webpacker):
```xml
bin/webpack-dev-server
```

### Troubleshooting
If getting non-deterministic issues when starting the servers, trying running the following:
```xml
yarn upgrade
```

## :star: Collaborators :star:
[ChiefDakota](https://github.com/ChiefDakota)
<br />
[DenisePillette](https://github.com/DenisePillette)
