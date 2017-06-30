#Weather App

## Install

`npm install`


## Test

`npm test`

## Setup

The 3rd party weather API darksky - http://www.darksky.net requires an API key.

Sign-up, then add `DARKSKY_KEY=<key>` to a file named `.env` in the root of this project

## Run

`npm start`


## Libraries of interest

### Nock:

* For stubbing requests to 3rd party APIs

### Supertest:

https://github.com/visionmedia/supertest

* For testing requests to your express app

### Sinon:

https://github.com/sinonjs/sinon

* For Stubbing third party module functions

* Note when stubbing module functions, this will not work in your code:

```
const { myFunction } = require('my-module');
```

You must import the module as an object to stub it out.


```
const myModule = require('my-module');
const myFunction = myModule.myFunction;
```

Your test stubbing will look like this:

```
const myModule = require('my-module');
sinon.stub(myModule,'myFunction');
```

## Motivation

This type of testing is very useful in that it will test the resulting outputs of a given input. Essentially black boxing your code.
