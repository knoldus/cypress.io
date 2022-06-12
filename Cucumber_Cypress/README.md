# BDD Automation Framework with Cypress
This template consist of how to integrate BDD(Behaviour-driven developmengt) Automation Framwork with cypress. Behavior Driven testing is an extension of TDD. Like in TDD in BDD also we write tests first and the add application code. In this template, I have defined a feature file where steps are defined.

# Feature File
Feature File is the entry point to the Cucumber tests of your framework. It is a file where you will write your tests in Descriptive Gherkin language (Like English).

# Step Definition
It is a small piece of code with a design pattern attached to it. An annotation followed by the pattern that we have mentioned in the feature file links the Step Definition to all the matching Steps. 

## ## Steps for execution
1. Install the current version of cypress in your Project_folder: 
Run `npm install cypress`. This will create node_modules folder that contain all the packages from NPM.

2. To integrate cucumber with cypress, first add the dependency of Cucumber-preprocessor node module. Run this command on your terminal:

`npm install --save-dev cypress-cucumber-preprocessor`

3. Clone the repository

https://github.com/knoldus/cypress.io/tree/feature/BDDFrameworkCypress

4. To run tests in headed and headless mode:

`npx cypress run --spec "cypress/integration/Login.feature" --headed`

`npx cypress run --spec "cypress/integration/Login.feature" --headless`

5. To run a particular tests on UI by selecting it:

`npx cypress open`

## Technologies used

**Programming Language** - Javascript, Gherkins

**Automation tool** - Cypress

**IDE** - Visual Studio Code

## Note: 
1. Folder name and Feature file name should be the same.
2. Feature file and step definitions should not be in the same folder.