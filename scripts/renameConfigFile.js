const fs = require('fs');
const success = require('./success');

const renameConfigFile = async (backup = true) => {
  const files = ['./data/template/config.js', './data/template/raw-config.js'];
  const order = backup ? files : files.reverse();
  if (!fs.existsSync(order[0])) {
    return success(`no more ${order[0]}`);
  }
  try {
    await fs.renameSync(order[0], order[1]);
    return success(`rename ${order[0]} as ${order[1]}`);
  } catch (err) {
    console.error(err);
  }

  return false;
};

module.exports = renameConfigFile;
