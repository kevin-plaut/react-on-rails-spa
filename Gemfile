source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.0"

gem "rails", "~> 5.2.2"

gem "bcrypt"
gem "bootsnap", require: false
gem "coffee-rails"
gem "jbuilder"
gem "knock"
gem "paranoia"
gem "puma"
gem "sass-rails"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "uglifier"
gem "webpacker", "~> 3.5"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "rspec"
  gem "rspec-rails"
  gem "sqlite3", "~> 1.3.6"
end

group :development do
  gem "listen"
  gem "spring"
  gem "spring-watcher-listen"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "chromedriver-helper"
  gem "selenium-webdriver"
end

group :production do
  gem "pg"
end
