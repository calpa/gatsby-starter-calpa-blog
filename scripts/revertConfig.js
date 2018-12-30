const fs = require('fs');
const renameConfigFile = require('./renameConfigFile');

const main = async () => {
  try {
    // 1. Rename raw-config.js as config.js
    await renameConfigFile(false);
    // 2. Delete config.json
    const file = './data/template/config.json';
    if (fs.exists(file)) {
      await fs.unlink(file);
    }
  } catch (err) {
    console.error(err);
  }
};

main();
