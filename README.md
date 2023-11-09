# EV Energy Mobile App Test Suite

Automated test suite for the EV Energy mobile application using Appium, Mocha, and Mochawesome for reporting.

## Description

This test suite is designed to automate functional testing of the EV Energy mobile application. It includes tests for user login, registration, and navigating through a test drive of the app.

## Getting Started

### Dependencies

- Node.js (v14 or higher recommended)
- Appium (For mobile automation)
- An Android or iOS emulator or real device setup
- Mocha (Test framework)
- Mochawesome (For generating test reports)
- Faker (For generating test data)

### Installing

- Clone the repository to your local machine.
- Install the dependencies with `npm install`.

### Running Tests

To run the tests, execute:

### bash
npm test

### Tests
- Tests are written using Mocha and chai for assertions. They simulate user interaction with the mobile app using Appium commands.

### Login Test
Verifies that login functionality works as expected and handles invalid credentials correctly.

### Registration Test
Automates the process of user registration, ensuring that all fields are filled correctly and the user is able to proceed with the account creation.

### Test Drive Navigation
Navigates through the app's test drive feature, ensuring that all screens are accessible and the final screen presents the expected information.

### Test Reports
After running the tests, Mochawesome generates an HTML report detailing the results of the tests. The report can be found at ./mochawesome-report/mochawesome.json.

### Built With
- Node.js
- Appium
- Mocha
- Mochawesome
- Faker
- Versioning
- For the versions available, see the tags on this repository.

### Authors
Louie Yasin
License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
Thanks to the open-source community for maintaining such helpful tools for automated testing.
Thanks to all contributors who have invested time in improving the test suite.