# Create a Junit report in Cypress
This template consist of how to generate a Junit report in cypress. 

## ## Steps for execution
1. Install the current version of cypress in your Project_folder: 
Run `npm install cypress`. This will create node_modules folder that contain all the packages from NPM.

2. Clone the repository

https://github.com/knoldus/cypress.io/tree/feature/

3. To install the package for the JUnit report. Run this command on your terminal:

`npm install cypress-junit-reporter --save-dev`

4. To avoid the overriding of reports, copy this code in your cypress.json

{
   "reporter": "junit",
   "reporterOptions": {
      "mochaFile": "cypress/results/results-[hash].xml",
      "toConsole": true
   }
}

5. To run tests in headless mode:

`npx cypress run --reporter junit`

After execution is completed, the results folder gets generated within the Cypress project containing reports in xml format.

6. To run a particular tests on UI by selecting it:

`npx cypress open`

## Technologies used

**Programming Language** - Javascript

**Automation tool** - Cypress

**IDE** - Visual Studio Code