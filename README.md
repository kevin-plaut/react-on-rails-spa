# <img src="https://chiefdakota.github.io/react-on-rails-spa/app/javascript/packs/assets/images/yay-fox.gif" alt="Yay Fox gif" /> React-on-Rails SPA <img src="https://chiefdakota.github.io/react-on-rails-spa/app/javascript/packs/assets/images/yay-fox.gif" alt="Yay Fox gif" />

## Setup
_We recommend using a Ruby version manager such as_ [`rbenv`](https://github.com/rbenv/rbenv)

In Terminal `cd` into the project directory (if not already there) and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to setup the app:
```xml
$ rbenv install 2.5.0

$ rbenv local 2.5.0

$ gem install bundler

$ bundle install

$ yarn install

$ rails db:create

$ rails db:migrate
```

## Running Locally
In a separate Terminal window/tab/pane, `cd` into the project directory (if not already there), and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to start a [Rails](https://github.com/rails/rails) server:
```xml
$ rails s
```

In a separate Terminal window/tab/pane, `cd` into the project directory (if not already there), and<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run the following to start [Webpacker](https://github.com/rails/webpacker):
```xml
$ bin/webpack-dev-server
```

## :star: Collaborators :star:
[ChiefDakota](https://github.com/ChiefDakota)
<br />
[DenisePillette](https://github.com/DenisePillette)
