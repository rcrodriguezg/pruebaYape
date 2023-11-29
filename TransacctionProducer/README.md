<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Arquetipo inicial basado en <a href="http://nodejs.org" target="_blank">Node.js</a> </p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Initializing the project

To initialize the project and customize the package.json with your project's details, run the following command:

```bash
$ npm run init
```
This command will prompt you to enter the name, description, and author of your project. Once you provide the required information, the package.json file will be updated accordingly.

Example:
```bash
$ npm run init

? Ingrese el nombre del proyecto: ms-smartki-config

El nombre del proyecto ms-smartki-config se ha actualizado en package.json.
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoint test

```bash
GET: http://localhost:3000

```
## Updating the version

To update the version in the package.json file, run the following command:

```bash
$ npm run update:version
```
This command will prompt you to select the type of version update (hotfix, bugfix, patch, minor, major). It will then update the version in the package.json file accordingly.

Example:
```bash
$ npm run update:version

? Select version type: (Use arrow keys)
❯ hotfix
  bugfix
  patch
  minor
  major

Version updated successfully from 1.0.0 to 1.0.1!
```

# Hexagonal Architecture Directory Structure

This is an example directory structure for a Nestjs application using the Hexagonal Architecture pattern. The Hexagonal Architecture promotes a clean and modular design that separates the core application logic from external concerns like frameworks, databases, and user interfaces.

## Directory Structure

```bash
src/
|-- application/
|   |-- usecases/
|   |
|   |-- services/
|
|-- domain/
|   |-- models/
|   |
|   |-- repositories/
|
|-- infrastructure/
|   |-- web/
|   |   |-- auth/
|   |   |
|   |   |-- controllers/
|   |   |
|   |   |-- middleware/
|   |
|   |-- persistence/
|   |   |-- typeorm.config.ts

|-- utils/        
|
|-- main.ts
|-- app.module.ts
|-- README.md


```


### Directory Explanation

- **application**: Contains application-specific logic, including use cases (business rules) and services.
  - **usecases**: Use cases are the core business logic of the application.
  - **services**: Services may provide various application-wide functionalities.

- **domain**: Holds domain logic, including models and repositories.
  - **models**: Defines domain models or entities.
  - **repositories**: Provides an interface to interact with data storage.

- **infrastructure**: Houses infrastructure-related code.
  - **web**: Contains controllers and other web-related components.
  - **persistence**: Includes database configuration and data access code.

- **main.ts**: Entry point of the application.
- **app.module.ts**: Configuration for the NestJS application.
- **README.md**: This README file.

This directory structure helps maintain a clear separation of concerns, making the application more modular and easier to test. The Hexagonal Architecture pattern emphasizes decoupling the core domain logic from external dependencies, allowing for flexibility and maintainability.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
