# Parallel Test Execution with Cypress

This repository demonstarate how can we implement parallel programming with Cypress. Here, we have used GitHub Actions and Cypress to run our tests in parallel execution.

## Why not on local device, but CI virtual machines

It is not recommended by Cypress to run our tests parallely on single device, as it would utilise significant resources to run it effeciently. Running test parallely on more than one virtual machine saves significant amount of time.

## Pre-requisites for Parallel Execution

- Create a project in Cypress Dashboard and go to project settings.
- Fetch project id and record key mentioned in the settings.
- Add the projectId in Cypress.json file in below manner

    `"projectId": "YOUR_PROJECT_ID"`

- Create a GitHub secret that stores the value of your RECORD_KEY.
- Pass it as Environment variable in YAML file in below manner : 

    ` CYPRESS_RECORD_KEY: ${{ secrets.RECORD_KEY }}`