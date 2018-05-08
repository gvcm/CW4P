CW4P
====

## Development

Install Node.js:

```
http://nodejs.org/download
```

Clone project:

```
git clone git@github.com:gvcm/cw4p.git
```

```
cd cw4p
export PATH=".:$PATH"
```

Install dependencies:

```
npm install
sudo npm install -g bower
bower install
sudo npm install -g grunt-cli
```

Run application:

```
grunt
```

## Production

### Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
