const fs = require('fs');
const success = require('./success');

const getPosts = require('../gatsby/getPosts');
const renameConfigFile = require('./renameConfigFile');

const createJSON = async (object) => {
  try {
    success('create data/template/config.json');
    await fs.writeFileSync(
      './data/template/config.json',
      JSON.stringify(object, null, 2),
    );
  } catch (err) {
    console.error(err);
  }
};

const createConfigFile = async () => {
  const { data } = await getPosts('configuration');
  const object = data.items[0].fields.blog;

  const hasConfig = await fs.existsSync('./data/template/config.js');

  if (hasConfig) {
    await renameConfigFile();

    await createJSON(object);
  } else {
    success('config.js had already renamed as config.json');
  }
};

createConfigFile();
