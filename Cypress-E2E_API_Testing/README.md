# End-to-End API Testing using Cypress
This template consist of how to perform End-to-End API Testing using Cypress. Cypress is an end-to-end testing framework for web test automation. Cypress also comes into the picture, when we have a use case where we need to validate our UI behavior against the browser network calls. Here, we have created an E2E_API.spec.js file and inside that file, we have defined our test cases for performing CRUD operations.

CRUD stands for Create, Read, Update, and Delete.

# .request() command
This command will be the center of it all. To send a simple request with a GET method, you can call it like this:

`cy.request('/api/boards')`

`.request()` command can take maximum of 3 arguments. The third one will be a request body.


## ## Steps for execution
1. Install the current version of cypress in your Project_folder: 
Run `npm install cypress`. This will create node_modules folder that contain all the packages from NPM.

2. Clone the repository

https://github.com/knoldus/cypress.io/tree/feature/Screenshots_Videos

3. To run tests in headed and headless mode:

`npx cypress run --spec "cypress/integration/E2E_API.spec.js" --headed`

`npx cypress run --spec "cypress/integration/E2E_API.spec.js" --headless`

4. To run a particular tests on UI by selecting it:

`npx cypress open`

## Technologies used

**Programming Language** - Javascript

**Automation tool** - Cypress

**IDE** - Visual Studio Code

For a better understanding, please refer to the blog:- 
https://blog.knoldus.com/crud-operations-how-to-perform-them-with-cypress/