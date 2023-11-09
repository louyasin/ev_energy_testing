const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

// Instantiate a Mocha instance.
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: '/Users/schoolboy/ev_energy_app_test/tests/reports',
    reportFilename: 'testReport',
    quiet: false,
    overwrite: true,
    html: true,
    json: true
  }
});

// Add each test file to the Mocha instance
fs.readdirSync('test-directory').filter(function(file) {
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file) {
    mocha.addFile(
        path.join('test-directory', file)
    );
});

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});
