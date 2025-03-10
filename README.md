# Pathology Lab Management Web Application - Test Automation

## Project Overview
This project focuses on automating the testing of a Pathology Lab Management Web Application using Cypress. The application provides features for managing pathology lab operations, including patient management, test requests, and a cost calculator.

## Application Features
1. **Login Page**
   - URL: [GOR Pathology Web Portal](https://gor-pathology.web.app/)
   - Credentials:
     - Username: `test@kennect.io`
     - Password: `Qwerty@1234`

2. **Home Page**
   - Displays a list of pending tasks (To-Do List)
   - Provides access to the Cost Calculator for blood tests

3. **Cost Calculator for Blood Tests**
   - Allows users to select different blood tests
   - Calculates the total cost based on selected tests
   - Users can apply discounts if applicable

4. **Adding Patients and Creating Tests**
   - Users can add new patient details
   - Enables test request creation for patients
   - Newly created test requests appear in the To-Do List

## Testing Approach
The testing was conducted using Cypress, a modern JavaScript-based test automation framework.

### Steps to Run the Tests

#### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS version recommended)
- Install [Git](https://git-scm.com/)
- Clone the repository:
  ```sh
  git clone https://github.com/your-repository-name.git
  cd your-repository-name
  ```

#### 2. Install Cypress
```sh
npm install
```

#### 3. Run Cypress Tests
- To open Cypress Test Runner:
  ```sh
  npx cypress open
  ```
  Select the desired test from the UI and run it.

- To run tests in headless mode:
  ```sh
  npx cypress run
  ```

#### 4. Folder Structure
- `cypress/integration/` – Contains the test cases
- `cypress/support/` – Custom commands and reusable functions
- `cypress/fixtures/` – Test data files
- `cypress/plugins/` – Custom plugins (if required)

#### 5. Test Cases Covered
- **Login Test**: Verifies successful login and incorrect credential handling.
- **Home Page Load Test**: Checks if To-Do List and Cost Calculator are visible.
- **Cost Calculator Test**: Ensures test selection and discount application work correctly.
- **Add Patient Test**: Validates patient creation and test request reflection in To-Do List.

## Contribution Guide
- Fork the repository
- Create a new branch for changes
- Commit changes with meaningful messages
- Push changes and create a pull request

## Author
- Developed and tested by Suman raj...

