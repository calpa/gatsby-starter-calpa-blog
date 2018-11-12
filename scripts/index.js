const fs = require('fs');
const getPosts = require('../gatsby/getPosts');

const createConfigFile = async () => {
  const { data } = await getPosts('configuration');

  // TODO: Validate the configJSON
  const configJSON = data.items[0].fields.blog || {};

  const hasConfig = await fs.existsSync('./data/template/config.js');
  if (hasConfig) {
    try {
      await fs.rename(
        './data/template/config.js',
        './data/template/raw-config.js',
      );
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log('no config.js here');
  }

  try {
    await fs.writeFile(
      './data/template/config.json',
      JSON.stringify(configJSON),
    );
  } catch (err) {
    console.error(err);
  }
};

createConfigFile();
