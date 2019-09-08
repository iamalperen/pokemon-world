# Pokemon World Web App

Pokemon World Application with Angular 8.0.0

Firebase Authentication

## Demo

https://iamalperen.github.io/demo/pokemon/

Demo Credentials

- mail: `test@test.com`

- password: `123456`



## Build

- Make sure that you have `npm` on your dev machine

- Run `npm install -g @angular/cli` to install angular-cli tool

- Run `npm install` to install npm dependencies of project

- Run `ng build` to build project

## Development Environment

- Run `ng serve` for a dev server after first build. 

- Navigate to `http://localhost:4200/`. 

- The app will automatically reload if you change any of the source files.


## Production Environment

- Run `ng build --configuration=production` to build project in prod environment

- Run `ng serve --configuration=production` to serve project in prod environment

- Navigate to `http://localhost:4200/`. 


## Test Environment
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Docker

First pull ngnix

```
docker pull nginx:alpine
```
Run ngnix

```
docker run -d -p 8080:80 nginx:alpine
```

Build prod version of project

```
ng build --configuration=production
```

Build docker container

```
docker build . -t pokemon:latest
```

Run docker container

```
docker run -d -p 8080:80 pokemon:latest
```

And now the app is accessible on `http://localhost:8080`


## Author and License
Created and maintained by [Alperen](https://github.com/iamalperen) under [MIT](LICENCE.md) License
