const fs = require('fs');
const path = require('path');

const appendToFile = (filename, content) => {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.appendFileSync(filename, content + '\n', 'utf8');
};

const saveTestData = (email, password) => {
  const dataToStore = `Email: ${email}, Password: ${password}`;
  appendToFile('/Users/schoolboy/ev_energy_app_test/tests/helpers/usedData.txt', dataToStore);
};

module.exports = { saveTestData };
